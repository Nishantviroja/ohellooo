// ✅ FIXED: Converted to server component for better SEO
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import HomeToolsSection from './components/HomeToolsSection';
import HomeBlogSection from './components/HomeBlogSection';



// ✅ Homepage metadata is defined in layout.js (siteMetadata.home)
// This ensures the homepage has proper SEO tags

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HomeToolsSection />
      <HomeBlogSection />
      <Footer />
    </div>
  );
}
