'use client';

import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GAMEZOP_PARTNER_ID from '../data/gamezop';

export default function PlayPage() {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({});

  useEffect(() => {
    // Fetch games from Gamezop API
    const fetchGames = async () => {
      try {
        const response = await fetch(
          `https://pub.gamezop.com/v3/games?id=${GAMEZOP_PARTNER_ID}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch games');
        }
        
        const data = await response.json();
        console.log('Games loaded:', data);
        
        if (data.games && Array.isArray(data.games)) {
          setGames(data.games);
        } else if (Array.isArray(data)) {
          setGames(data);
        }
        
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching games:', err);
        setError('Failed to load games. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchGames();
  }, []);

  // Filter games by search query
  const filteredGames = games.filter(game => {
    if (!searchQuery) return true;
    
    const gameName = game.name?.en?.toLowerCase() || '';
    const gameDesc = game.description?.en?.toLowerCase() || '';
    const search = searchQuery.toLowerCase();
    
    return gameName.includes(search) || gameDesc.includes(search);
  });

  // Get featured/popular games (first 6 games)
  const featuredGames = games.slice(0, 6);

  // Get unique categories and group games by category
  const categoriesData = {};
  games.forEach(game => {
    const cats = game.categories?.en || [];
    cats.forEach(category => {
      if (!categoriesData[category]) {
        categoriesData[category] = [];
      }
      categoriesData[category].push(game);
    });
  });

  // Sort categories by number of games
  const sortedCategories = Object.entries(categoriesData)
    .sort((a, b) => b[1].length - a[1].length);

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const openGame = (game) => {
    // Open game directly in new tab
    if (game.url) {
      window.open(game.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: 'radial-gradient(circle, #4F46E5 2px, transparent 2px)',
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 rounded-full text-sm font-semibold bg-white text-blue-600 border border-blue-100 shadow-lg">
              🎮 {games.length}+ Free Games
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mb-4 md:mb-6">
            Play Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient">Online Games</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
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
                Found <strong>{filteredGames.length}</strong> game{filteredGames.length !== 1 ? 's' : ''} matching "{searchQuery}"
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
            <div className="text-center p-8 bg-red-50 rounded-3xl max-w-md">
              <div className="text-6xl mb-6">⚠️</div>
              <p className="text-red-600 font-bold text-xl mb-6">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Retry
              </button>
            </div>
          </div>
        )}

        {!isLoading && !error && games.length > 0 && (
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
                      <GameCard key={game.code || game.id} game={game} onClick={() => openGame(game)} featured />
                    ))}
                  </div>
                </section>

                {/* Category Sections */}
                {sortedCategories.map(([category, categoryGames]) => {
                  const isExpanded = expandedCategories[category];
                  const displayGames = isExpanded ? categoryGames : categoryGames.slice(0, 10);
                  const hasMore = categoryGames.length > 10;

                  return (
                    <section key={category} className="mb-16">
                      <div className="flex items-center justify-between mb-8">
                        <div>
                          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                            {category}
                          </h2>
                          <p className="text-gray-600">{categoryGames.length} games</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                        {displayGames.map((game) => (
                          <GameCard key={game.code || game.id} game={game} onClick={() => openGame(game)} />
                        ))}
                      </div>
                      {hasMore && !isExpanded && (
                        <div className="flex justify-center mt-8">
                          <button
                            onClick={() => toggleCategory(category)}
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
                          >
                            View More
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                        </div>
                      )}
                      {hasMore && isExpanded && (
                        <div className="flex justify-center mt-8">
                          <button
                            onClick={() => toggleCategory(category)}
                            className="px-8 py-4 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
                          >
                            Show Less
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                            </svg>
                          </button>
                        </div>
                      )}
                    </section>
                  );
                })}
              </>
            )}

            {/* All Games / Search Results */}
            <section className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {searchQuery ? '🔍 Search Results' : '🎯 All Games'}
                  </h2>
                  <p className="text-gray-600">{filteredGames.length} games available</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                {filteredGames.map((game) => (
                  <GameCard key={game.code || game.id} game={game} onClick={() => openGame(game)} />
                ))}
              </div>
            </section>
          </>
        )}

        {!isLoading && !error && games.length === 0 && (
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

// Game Card Component
function GameCard({ game, onClick, featured = false, isNew = false }) {
  return (
    <div
      className={`group relative bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-300 ${
        featured ? 'ring-2 ring-blue-400 ring-offset-2' : ''
      }`}
      onClick={onClick}
    >
      {/* Badge */}
      {(featured || isNew) && (
        <div className="absolute top-2 right-2 z-10">
          <span className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg ${
            featured ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-gradient-to-r from-green-500 to-emerald-500'
          }`}>
            {featured ? '🔥 HOT' : '✨ NEW'}
          </span>
        </div>
      )}

      {/* Thumbnail */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
        <img
          src={game.thumbnail || game.assets?.cover || game.image}
          alt={game.name?.en || game.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect width="200" height="200" fill="%234F46E5"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="60" fill="white"%3E🎮%3C/text%3E%3C/svg%3E';
          }}
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div className="bg-white/90 px-6 py-3 rounded-full text-gray-900 font-bold flex items-center gap-2 shadow-xl">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
              Play Now
            </div>
          </div>
        </div>
      </div>

      {/* Game Info */}
      <div className="p-4">
        <h3 className="font-bold text-sm md:text-base text-gray-900 truncate group-hover:text-blue-600 transition-colors">
          {game.name?.en || game.title || 'Unknown Game'}
        </h3>
      </div>
    </div>
  );
}
