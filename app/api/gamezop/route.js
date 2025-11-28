import { NextResponse } from 'next/server';
import GAMEZOP_PARTNER_ID from '../../data/gamezop';

// API endpoint for Gamezop integration
export async function GET(request) {
  try {
    // Fetch games from Gamezop API
    const response = await fetch(
      `https://pub.gamezop.com/v3/games?id=${GAMEZOP_PARTNER_ID}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch games from Gamezop');
    }

    const gamesData = await response.json();

    return NextResponse.json({
      status: 'success',
      message: 'Games fetched successfully',
      data: gamesData,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { 
        status: 'error', 
        message: 'Failed to fetch games',
        error: error.message 
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    // Handle webhooks or analytics from Gamezop
    const body = await request.json();
    
    // Log or process the data
    console.log('Gamezop webhook received:', body);

    // Example: Track game plays, user engagement, etc.
    return NextResponse.json({
      status: 'success',
      message: 'Webhook processed successfully',
      received: body,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { 
        status: 'error', 
        message: 'Failed to process webhook',
        error: error.message 
      },
      { status: 500 }
    );
  }
}




