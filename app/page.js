// ✅ FIXED: Converted to server component for better SEO
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import CategoriesGrid from './components/CategoriesGrid';
import HomeToolsSection from './components/HomeToolsSection';
import HomeBlogSection from './components/HomeBlogSection';
import HomeSchema from './components/HomeSchema';
import TrendingToolsSection from './components/TrendingToolsSection';
import HowItWorksSection from './components/HowItWorksSection';
import RecentlyAddedSection from './components/RecentlyAddedSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';

// ✅ Homepage metadata is defined in layout.js (siteMetadata.home)
// This ensures the homepage has proper SEO tags

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HomeSchema />
      <Navbar />
      <Hero />
      <TrendingToolsSection />
      <CategoriesGrid />
      <HowItWorksSection />
      <RecentlyAddedSection />
      <HomeBlogSection />
      <TestimonialsSection />
      <FAQSection />
      {/* <HomeToolsSection /> */}
      <Footer />
    </div>
  );
}
