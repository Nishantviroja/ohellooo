import { NextResponse } from 'next/server';
 
export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, message } = body;
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }
 
    // Your Google Apps Script Web App URL for contact form
    const scriptUrl = 'https://script.google.com/macros/s/AKfycby7aVYhL1JzzK3OCLLpug8oPRXjjNYiX3G44adXJ6HllM_oMsyoTkS8fEvKEL5AKqZi/exec';
 
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, lastName, email, message }),
    });
 
    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json({ error: errorData.error || 'Failed to submit contact form.' }, { status: response.status });
    }
 
    const data = await response.json();
    return NextResponse.json({ success: true, id: data.id });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}