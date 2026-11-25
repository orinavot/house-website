import type { APIRoute } from 'astro';
import { PAPER, faviconPng } from '../lib/favicon';

// iOS home-screen icon: an opaque square.
export const GET: APIRoute = async () =>
  new Response(await faviconPng(180, PAPER), {
    headers: { 'Content-Type': 'image/png' },
  });
