/**
 * Photography — all images from Unsplash (https://unsplash.com/license):
 * free for commercial use, no attribution required. Credits are kept in
 * CREDITS.md as good practice. Astro optimises them to AVIF/WebP at build.
 */
import analytics from '../assets/photos/analytics.jpg';
import codeScreen from '../assets/photos/code-screen.jpg';
import collab from '../assets/photos/collab.jpg';
import cyber from '../assets/photos/cyber.jpg';
import laptopCode from '../assets/photos/laptop-code.jpg';
import meeting from '../assets/photos/meeting.jpg';
import mobile from '../assets/photos/mobile.jpg';
import network from '../assets/photos/network.jpg';
import peopleLaptops from '../assets/photos/people-laptops.jpg';
import server from '../assets/photos/server.jpg';
import teamOffice from '../assets/photos/team-office.jpg';
import uiDesign from '../assets/photos/ui-design.jpg';
import whiteboard from '../assets/photos/whiteboard.jpg';
import workspace from '../assets/photos/workspace.jpg';
import heroTeam from '../assets/photos/hero-team.jpg';

export const photos = {
  analytics, codeScreen, collab, cyber, laptopCode, meeting, mobile, network,
  peopleLaptops, server, teamOffice, uiDesign, whiteboard, workspace, heroTeam,
};

export const servicePhotos: Record<string, { src: ImageMetadata; alt: string }> = {
  'web-development': { src: codeScreen, alt: 'Laptop displaying source code for a web application' },
  'mobile-app-development': { src: mobile, alt: 'Smartphone home screen showing mobile apps' },
  'custom-software-development': { src: laptopCode, alt: 'Developer laptop with custom software code on screen' },
  'it-consulting': { src: meeting, alt: 'Consultant presenting a technology strategy to a team' },
  'cloud-devops': { src: server, alt: 'Server rack with network cabling in a data centre' },
  'software-quality-assurance': { src: cyber, alt: 'Close-up of an illuminated circuit board' },
  'ui-ux-design': { src: whiteboard, alt: 'Designer arranging wireframes and user flows on a whiteboard' },
  'seo-services': { src: analytics, alt: 'Laptop showing an SEO and traffic analytics dashboard' },
  'hire-dedicated-developers': { src: workspace, alt: 'Developer working at a desk with multiple monitors' },
  'tech-recruitment': { src: peopleLaptops, alt: 'Interview panel reviewing candidates on laptops' },
};
