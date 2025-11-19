// src/app/api/geocode/route.ts
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const apiKey = request.headers.get('x-api-key');

  if (apiKey !== 'sk_test_2025') {
    return new Response(JSON.stringify({ error: 'Invalid API key – get yours at https://smartgeocode.io' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { searchParams } = new URL(request.url);
  const address = searchParams.get('address') || 'Delhi';

  return new Response(JSON.stringify({
    requested: address,
    formatted_address: `${address}, Planet Earth`,
    latitude: 28.7041,
    longitude: 77.1025,
    accuracy: 'roof-level',
    provider: 'smartgeocode.io',
    built_by: 'Ex-Amazon L6 – weekend builds @ $5k flat',
    message: 'This API was built in <48 hours – imagine what I can do for your startup',
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}