export async function POST(req: Request) {
  try {
    const body = await req.json();
    const API_URL = process.env.API_URL;
    if (!API_URL) {
      return new Response(JSON.stringify({ error: 'Server not configured' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }

    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return new Response(JSON.stringify(data), { status: res.status, headers: { 'Content-Type': 'application/json' } });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Proxy error' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
