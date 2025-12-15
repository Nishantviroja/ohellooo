'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PlaySchema from './PlaySchema';

export default function PlayPage() {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    // Fetch games from our API route (which calls Gamezop API)
    const fetchGames = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/gamezop?lang=en');
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to fetch games');
        }
        
        const data = await response.json();
        console.log('Games loaded:', data);
        
        if (data.status === 'success' && data.data?.games) {
          setGames(data.data.games);
        } else {
          throw new Error('Invalid response format');
        }
        
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching games:', err);
        setError(err.message || 'Failed to load games. Please try again later.');
        setGames([]); // Ensure games is always an array even on error
        setIsLoading(false);
      }
    };

    fetchGames();
  }, []);

  // Ensure games is always an array
  const gamesArray = Array.isArray(games) ? games : [];

  // Filter games by search query
  const filteredGames = gamesArray.filter(game => {
    if (!searchQuery) return true;
    
    const gameName = game.name?.toLowerCase() || '';
    const gameDesc = game.description?.toLowerCase() || '';
    const search = searchQuery.toLowerCase();
    
    return gameName.includes(search) || gameDesc.includes(search);
  });

  // Get featured/popular games (first 6 games)
  const featuredGames = gamesArray.slice(0, 6);

  // Get unique categories and group games by category
  const categoriesData = {};
  gamesArray.forEach(game => {
    const category = game.category?.name || 'Other';
    if (!categoriesData[category]) {
      categoriesData[category] = [];
    }
    categoriesData[category].push(game);
  });

  // Sort categories by number of games
  const sortedCategories = Object.entries(categoriesData)
    .sort((a, b) => b[1].length - a[1].length);

  // Get games for selected category
  const categoryGames = selectedCategory === 'all' 
    ? gamesArray 
    : categoriesData[selectedCategory] || [];

  const openGame = (game) => {
    // Open game directly in new tab
    if (game.url) {
      window.open(game.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <PlaySchema />
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative py-10 md:py-16 overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: 'radial-gradient(circle, #4F46E5 2px, transparent 2px)',
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-2">
            Play Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient">Online Games</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Discover amazing games. Play instantly, no downloads required!
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search games by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pr-12 text-lg rounded-full bg-white text-gray-800 border-2 border-gray-200 focus:border-blue-500 focus:outline-none shadow-lg transition-all"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                {searchQuery ? (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                ) : (
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                )}
              </div>
            </div>
            {searchQuery && (
              <p className="mt-3 text-gray-600">
                Found <strong>{filteredGames.length}</strong> game{filteredGames.length !== 1 ? 's' : ''} matching &quot;{searchQuery}&quot;
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {isLoading && (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-6"></div>
              <p className="text-gray-600 font-semibold text-lg">Loading amazing games...</p>
            </div>
          </div>
        )}

        {error && (
          <div className="flex items-center justify-center py-20">
            <div className="text-center p-8 bg-red-50 rounded-3xl max-w-2xl">
              <div className="text-6xl mb-6">⚠️</div>
              <p className="text-red-600 font-bold text-xl mb-4">{error}</p>
              
              {error.includes('Bearer Token') && (
                <div className="mt-6 p-6 bg-white rounded-2xl text-left">
                  <h3 className="font-bold text-lg mb-4 text-gray-900">How to Fix:</h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Login to <a href="https://business.gamezop.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Gamezop Business Dashboard</a></li>
                    <li>Go to: <strong>Settings & Admin → API Tokens</strong></li>
                    <li>Copy your Bearer token</li>
                    <li>Open <code className="bg-gray-100 px-2 py-1 rounded">app/data/gamezop.js</code></li>
                    <li>Update <code className="bg-gray-100 px-2 py-1 rounded text-sm">BEARER_TOKEN</code> with your token</li>
                    <li>Restart your development server</li>
                  </ol>
                  <p className="mt-4 text-sm text-gray-600">
                    <strong>Note:</strong> If you don&apos;t see &quot;API Tokens&quot; section, contact your Gamezop Account Manager to enable it.
                  </p>
                </div>
              )}
              
              <button
                onClick={() => window.location.reload()}
                className="mt-6 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Retry
              </button>
            </div>
          </div>
        )}

        {!isLoading && !error && gamesArray.length > 0 && (
          <>
            {!searchQuery && (
              <>
                {/* Featured Games Section */}
                <section className="mb-16">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">🔥 Featured Games</h2>
                      <p className="text-gray-600">Most popular games right now</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                    {featuredGames.map((game) => (
                      <GameCard key={game.code} game={game} onClick={() => openGame(game)} featured />
                    ))}
                  </div>
                </section>

                {/* Browse by Category - Desktop/Tablet Only */}
                <section className="hidden md:block mb-16">
                  <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Browse by Category</h2>
                    <p className="text-gray-600">Explore games from different genres</p>
                  </div>

                  {/* Category Tabs */}
                  <div className="mb-8 overflow-x-auto">
                    <div className="flex min-w-max bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-full px-3 py-2 bg-gray-50">
                      <button
                        onClick={() => setSelectedCategory('all')}
                        className={`flex-1 px-6 py-2 cursor-pointer rounded-full font-semibold transition-all whitespace-nowrap ${
                          selectedCategory === 'all'
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                            : 'bg-transparent text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    All ({gamesArray.length})
                  </button>
                  {sortedCategories.map(([category, categoryGamesList]) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`flex-1 px-6 py-2 cursor-pointer rounded-full font-semibold transition-all duration-500 ease-in-out whitespace-nowrap ${
                            selectedCategory === category
                              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                              : 'bg-transparent text-gray-800 hover:bg-gray-100'
                          }`}
                        >
                          {category} ({categoryGamesList.length})
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Category Games Grid - Compact Design */}
                  <div className="grid grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3 animate-fadeIn">
                    {categoryGames.map((game, index) => (
                      <div
                        key={game.code}
                        style={{ animationDelay: `${index * 0.02}s` }}
                        className="animate-fadeInUp"
                      >
                        <GameCardDesign1 game={game} onClick={() => openGame(game)} />
                      </div>
                    ))}
                  </div>

                  {categoryGames.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                      <p className="text-lg">No games found in this category.</p>
                    </div>
                  )}
                </section>

                {/* All Games - Mobile Only (2 columns) */}
            <section className="block md:hidden mb-16">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">🎯 All Games</h2>
                <p className="text-gray-600">{gamesArray.length} games available</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {gamesArray.map((game) => (
                      <GameCardDesign1 key={game.code} game={game} onClick={() => openGame(game)} />
                    ))}
                  </div>
                </section>
              </>
            )}

            {/* Search Results Only (when searching) */}
            {searchQuery && (
              <section className="mb-16">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                      🔍 Search Results
                    </h2>
                    <p className="text-gray-600">{filteredGames.length} games found</p>
                  </div>
                </div>
                {filteredGames.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3">
                    {filteredGames.map((game) => (
                      <GameCardDesign1 key={game.code} game={game} onClick={() => openGame(game)} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">🔍</div>
                    <p className="text-gray-600 text-lg">No games found matching your search.</p>
                    <button
                      onClick={() => setSearchQuery('')}
                      className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                    >
                      Clear Search
                    </button>
                  </div>
                )}
              </section>
            )}
          </>
        )}

        {!isLoading && !error && gamesArray.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-6">🎮</div>
            <p className="text-gray-600 font-semibold text-xl">No games available at the moment.</p>
          </div>
        )}

        {/* Info Cards */}
        <section className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl border-2 border-blue-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="text-5xl mb-4">🎮</div>
            <h3 className="font-bold text-xl mb-3 text-gray-900">Instant Play</h3>
            <p className="text-gray-700">Click any game and start playing immediately. No downloads, no waiting!</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-3xl border-2 border-purple-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="text-5xl mb-4">🆓</div>
            <h3 className="font-bold text-xl mb-3 text-gray-900">100% Free</h3>
            <p className="text-gray-700">All games are completely free. No subscriptions, no hidden costs!</p>
          </div>
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-3xl border-2 border-pink-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="text-5xl mb-4">📱</div>
            <h3 className="font-bold text-xl mb-3 text-gray-900">Any Device</h3>
            <p className="text-gray-700">Play on desktop, tablet, or mobile. Fully responsive and optimized!</p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

// Game Card Component (Original - for Featured)
function GameCard({ game, onClick, featured = false }) {
  return (
    <div
      className={`group relative bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-300 ${
        featured ? 'ring-2 ring-blue-400 ring-offset-2' : ''
      }`}
      onClick={onClick}
    >
      {/* Badge */}
      {featured && (
        <div className="absolute top-2 right-2 z-10">
          <span className="px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg bg-gradient-to-r from-orange-500 to-red-500">
            🔥 HOT
          </span>
        </div>
      )}

      {/* Thumbnail */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
        <Image
          src={game.images?.square || game.images?.cover || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect width="200" height="200" fill="%234F46E5"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="60" fill="white"%3E🎮%3C/text%3E%3C/svg%3E'}
          alt={game.name || 'Game thumbnail'}
          width={400}
          height={400}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          unoptimized
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <div className="transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <svg className="w-12 h-12 md:w-16 md:h-16 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Game Info */}
      <div className="p-4">
        <h3 className="font-bold text-sm md:text-base text-gray-900 truncate group-hover:text-blue-600 transition-colors">
          {game.name || 'Unknown Game'}
        </h3>
      </div>
    </div>
  );
}

// Design 1: Minimal with Bottom Fade (Always Visible)
function GameCardDesign1({ game, onClick }) {
  return (
    <div 
      className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-blue-600"
      onClick={onClick}
    >
      <Image
        src={game.images?.square || game.images?.cover || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect width="200" height="200" fill="%234F46E5"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="60" fill="white"%3E🎮%3C/text%3E%3C/svg%3E'}
        alt={game.name || 'Game'}
        width={200}
        height={200}
        className="w-full h-full object-cover"
        unoptimized
      />
      {/* Gradient fade and name - always visible */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-2">
          <p className="text-white font-semibold truncate">{game.name}</p>
        </div>
      </div>
      {/* Play button - only on hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
          <svg className="w-6 h-6 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
