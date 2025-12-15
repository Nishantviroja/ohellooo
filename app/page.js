// ✅ FIXED: Converted to server component for better SEO
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import FeaturedToolsSection from './components/FeaturedToolsSection';
import CategoriesGrid from './components/CategoriesGrid';
import StatsSection from './components/StatsSection';
import HomeToolsSection from './components/HomeToolsSection';
import HomeBlogSection from './components/HomeBlogSection';
import HomeSchema from './components/HomeSchema';

// ✅ Homepage metadata is defined in layout.js (siteMetadata.home)
// This ensures the homepage has proper SEO tags

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HomeSchema />
      <Navbar />
      <Hero />
      <StatsSection />
      <FeaturedToolsSection />
      <CategoriesGrid />
      <HomeToolsSection />
      <HomeBlogSection />
      <Footer />
    </div>
  );
}
