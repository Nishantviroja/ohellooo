import { NextResponse } from 'next/server';
 
export async function POST(request) {
  try {
    const body = await request.json();
    const { email } = body;
    if (!email) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
    }
 
    // Your Google Apps Script Web App URL for subscriptions
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbzNaCWIr1jlRjOx31lJj9wfojlL4jmO3VTnKy_XO01dC_ow7Qu-MV8UtDDahl3P1i30EA/exec';
 
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
 
    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json({ error: errorData.error || 'Failed to subscribe.' }, { status: response.status });
    }
 
    const data = await response.json();
    return NextResponse.json({ success: true, id: data.id });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}