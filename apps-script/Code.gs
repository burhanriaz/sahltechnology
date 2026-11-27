/**
 * Sahl Technology: quote form mailer (Google Apps Script web app)
 *
 * Called ONLY by the Cloudflare function (functions/api/quote.ts), which validates the
 * form and runs the Turnstile spam check first. Every request must carry the shared
 * secret stored in this script's properties, so the web-app URL can't be used by others.
 *
 * It sends:
 *   1. the enquiry to your inbox (Reply goes to the customer)
 *   2. a confirmation to the customer (Reply goes to your inbox)
 * and appends each enquiry to a Google Sheet (lead log).
 *
 * Email addresses and the sender name come from Cloudflare variables
 * (QUOTE_TO_EMAIL, QUOTE_CC_EMAIL, QUOTE_FROM_NAME, QUOTE_REPLY_TO), so none are stored in this file.
 *
 * SETUP (once):
 *   1. Run → setup  (approve Google's permission screen)
 *   2. View → Executions / Logs: copy the APPS_SCRIPT_SECRET value into Cloudflare
 *   3. Deploy → New deployment → Web app → Execute as: Me, Who has access: Anyone
 *   4. Copy the web-app URL into Cloudflare as APPS_SCRIPT_URL
 */

var SHEET_HEADERS = ['Received', 'Name', 'Email', 'Company', 'Service', 'Timeline', 'Budget', 'Message', 'Confirmation sent'];

/** Run once from the editor. Creates the shared secret and the lead-log sheet. */
function setup() {
  var props = PropertiesService.getScriptProperties();

  if (!props.getProperty('SHARED_SECRET')) {
    var secret = Utilities.getUuid().replace(/-/g, '') + Utilities.getUuid().replace(/-/g, '');
    props.setProperty('SHARED_SECRET', secret);
  }

  var sheetId = props.getProperty('SHEET_ID');
  var sheet;
  if (sheetId) {
    sheet = SpreadsheetApp.openById(sheetId);
  } else {
    sheet = SpreadsheetApp.create('Sahl Technology - Quote requests');
    var first = sheet.getSheets()[0];
    first.appendRow(SHEET_HEADERS);
    first.setFrozenRows(1);
    first.getRange(1, 1, 1, SHEET_HEADERS.length).setFontWeight('bold');
    props.setProperty('SHEET_ID', sheet.getId());
  }

  // Also authorises email sending.
  Logger.log('Emails you can still send today: ' + MailApp.getRemainingDailyQuota());
  Logger.log('Lead log sheet: ' + sheet.getUrl());
  Logger.log('APPS_SCRIPT_SECRET (paste into Cloudflare as a Secret): ' + props.getProperty('SHARED_SECRET'));
}

/** Health check: opening the web-app URL in a browser shows this. */
function doGet() {
  return json_({ ok: true, service: 'Sahl Technology quote mailer' });
}

function doPost(e) {
  try {
    var body = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    var props = PropertiesService.getScriptProperties();
    var secret = props.getProperty('SHARED_SECRET');
    if (!secret || body.secret !== secret) return json_({ ok: false, error: 'unauthorized' });

    var f = body.fields || {};
    var cfg = body.config || {};
    if (!cfg.to || !f.email || !body.enquiry) return json_({ ok: false, error: 'bad request' });

    // 1. Enquiry to Sahl Technology (Reply goes straight to the customer)
    MailApp.sendEmail({
      to: cfg.to,
      cc: cfg.cc || '',
      replyTo: f.email,
      name: cfg.fromName || 'Sahl Technology Quotes',
      subject: body.enquiry.subject,
      htmlBody: body.enquiry.html,
      body: body.enquiry.text,
    });

    // 2. Confirmation to the customer (Reply goes to the Sahl Technology inbox)
    var confirmed = false;
    if (body.confirmation) {
      try {
        MailApp.sendEmail({
          to: f.email,
          replyTo: cfg.replyTo || cfg.to,
          name: cfg.fromName || 'Sahl Technology Quotes',
          subject: body.confirmation.subject,
          htmlBody: body.confirmation.html,
          body: body.confirmation.text,
        });
        confirmed = true;
      } catch (err) {
        console.error('confirmation failed: ' + err);
      }
    }

    // 3. Lead log (never fails the request)
    try {
      var sheetId = props.getProperty('SHEET_ID');
      if (sheetId) {
        SpreadsheetApp.openById(sheetId).getSheets()[0].appendRow([
          new Date(), cell_(f.name), cell_(f.email), cell_(f.company), cell_(f.service),
          cell_(f.timeline), cell_(f.budget), cell_(f.message), confirmed ? 'yes' : 'no',
        ]);
      }
    } catch (err) {
      console.error('sheet log failed: ' + err);
    }

    return json_({ ok: true });
  } catch (err) {
    console.error(err);
    return json_({ ok: false, error: 'server error' });
  }
}

/** Stop customer text being run as a spreadsheet formula (=, +, -, @). */
function cell_(v) {
  var s = String(v == null ? '' : v);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
