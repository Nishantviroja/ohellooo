import { NextResponse } from 'next/server';
import GAMEZOP_CONFIG from '../../data/gamezop';

// API endpoint for Gamezop All Games API
// Documentation: https://docs.platform.gamezop.com/publishers/gamezop/types-of-integration/all-games-api
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get('lang') || 'en'; // Default to English

    // Check if Bearer token is configured
    if (!GAMEZOP_CONFIG.BEARER_TOKEN) {
      return NextResponse.json(
        { 
          status: 'error', 
          message: 'Gamezop Bearer Token not configured. Please update app/data/gamezop.js',
          instructions: {
            step1: 'Login to Gamezop Business Dashboard: https://business.gamezop.com/',
            step2: 'Go to: Settings & Admin > API Tokens',
            step3: 'Copy your Bearer token',
            step4: 'Add it to app/data/gamezop.js in the BEARER_TOKEN field',
            note: 'If you don\'t see API Tokens section, contact your Gamezop Account Manager'
          }
        },
        { status: 401 }
      );
    }

    // Fetch games from Gamezop All Games API
    const response = await fetch(
      `https://api.gamezop.com/v3/games?lang=${lang}`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${GAMEZOP_CONFIG.BEARER_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gamezop API Error:', response.status, errorText);
      
      if (response.status === 401) {
        return NextResponse.json(
          { 
            status: 'error', 
            message: 'Invalid Bearer Token. Please check your Gamezop API token.',
            hint: 'Go to Gamezop Dashboard > Settings & Admin > API Tokens to verify your token'
          },
          { status: 401 }
        );
      }

      throw new Error(`Gamezop API returned ${response.status}: ${errorText}`);
    }

    const data = await response.json();

    // Transform the data to match our expected format
    // Gamezop API returns: { data: [...games...], success: true }
    const games = data.data || data.games || data || [];
    
    return NextResponse.json({
      status: 'success',
      message: 'Games fetched successfully',
      data: {
        games: Array.isArray(games) ? games : [],
        total: Array.isArray(games) ? games.length : 0,
        partner_id: GAMEZOP_CONFIG.PARTNER_ID,
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error fetching games:', error);
    return NextResponse.json(
      { 
        status: 'error', 
        message: 'Failed to fetch games from Gamezop',
        error: error.message,
        details: 'Please check your Bearer token and network connection'
      },
      { status: 500 }
    );
  }
}

