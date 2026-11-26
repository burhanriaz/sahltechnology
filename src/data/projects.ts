/**
 * Portfolio projects (names carried over from the previous site).
 * TODO: review each summary and add real results, links and screenshots.
 * Avoid adding metrics or client names you are not permitted to publish.
 */
import erp from '../assets/projects/erp-b.jpg';
import enterprise from '../assets/projects/ent-a.jpg';
import health from '../assets/projects/health-a.jpg';
import events from '../assets/projects/event-b.jpg';
import cars from '../assets/projects/car-b.jpg';
import trucks from '../assets/projects/truck-a.jpg';

export interface Project {
  image: ImageMetadata;
  imageAlt: string;
  title: string;
  category: string;
  summary: string;
  tags: string[];
  services: string[]; // service slugs
}

export const projects: Project[] = [
  {
    title: 'Hysabat ERP',
    image: erp,
    imageAlt: 'Analytics dashboard with financial charts on a monitor',
    category: 'Enterprise ERP',
    summary:
      'A modular ERP platform covering accounting, inventory, purchasing and reporting, designed to replace spreadsheets with a single source of truth.',
    tags: ['ERP', 'Finance', 'Web App'],
    services: ['custom-software-development', 'web-development', 'software-quality-assurance'],
  },
  {
    title: 'Aramco Citizen App ERP',
    image: enterprise,
    imageAlt: 'Looking up at modern corporate office towers',
    category: 'Enterprise System',
    summary:
      'An enterprise application with role-based workflows, approvals and operational dashboards for large-scale internal users.',
    tags: ['Enterprise', 'Workflows', 'Dashboards'],
    services: ['custom-software-development', 'software-quality-assurance'],
  },
  {
    title: 'Ailaaj',
    image: health,
    imageAlt: 'Doctor in a white coat using a smartphone',
    category: 'Healthcare App',
    summary:
      'A digital healthcare experience connecting patients with care providers through a simple, accessible mobile-first interface.',
    tags: ['Healthcare', 'Mobile', 'UX'],
    services: ['mobile-app-development', 'ui-ux-design'],
  },
  {
    title: 'Huddle Agency / Event Zero',
    image: events,
    imageAlt: 'Presenter on stage in front of a large audience at an event',
    category: 'Events Platform',
    summary:
      'A modern web presence and event-management platform for an events agency, built for speed, discoverability and easy content updates.',
    tags: ['Events', 'Website', 'SEO'],
    services: ['web-development', 'seo-services', 'ui-ux-design'],
  },
  {
    title: 'Car Rental Management System',
    image: cars,
    imageAlt: 'Sports cars parked in a modern car showroom',
    category: 'Fleet & Booking',
    summary:
      'End-to-end rental operations: vehicle inventory, bookings, contracts, payments and maintenance scheduling in one system.',
    tags: ['Booking', 'Payments', 'Operations'],
    services: ['custom-software-development', 'web-development'],
  },
  {
    title: 'Driver Recruitment Portal',
    image: trucks,
    imageAlt: 'Freight truck driving on a mountain highway',
    category: 'Recruitment Platform',
    summary:
      'A recruitment portal that streamlines driver applications, document verification and onboarding for logistics operators.',
    tags: ['HR Tech', 'Portal', 'Automation'],
    services: ['web-development', 'custom-software-development'],
  },
];
