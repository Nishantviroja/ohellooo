import { aiTools } from '../../data/aiTools';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HomeBlogSection from '../../components/HomeBlogSection';
import { notFound } from 'next/navigation';

const getCategoryFromSeoSlug = (slug) => slug.replace(/-ai-tools$/, '');
const slugify = (str) => {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // replace non-alphanumeric with dash
    .replace(/^-+|-+$/g, '')     // trim leading/trailing dashes
    .replace(/-+/g, '-');        // collapse multiple dashes
};

// Removed generateStaticParams to avoid prebuilding 3000+ tool pages. Pages will be generated on-demand.

// Generate metadata for each tool detail page
export async function generateMetadata({ params }) {
  const { category, tool } = await params;
  const categorySlug = getCategoryFromSeoSlug(category);
  const toolParam = tool.toLowerCase();

  // Find the tool by slugified name
  const foundTool = aiTools.find(t => {
    const toolCategorySlug = (t.category || '').toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
    return (
      toolCategorySlug === categorySlug &&
      t.name && slugify(t.name) === toolParam
    );
  });

  if (!foundTool) {
    return {
      title: 'Tool Not Found | Fizoval',
      description: 'Sorry, we couldn\'t find the tool you\'re looking for.',
      robots: { index: true, follow: true, maxImagePreview: 'large' },
    };
  }

  const title = `${foundTool.name || foundTool.title} - Best ${foundTool.category} AI Tool | Fizoval`;
  const description = `${foundTool.name || foundTool.title} is a powerful ${foundTool.category.toLowerCase()} AI tool. That helps you ${foundTool.description}`;
  const keywords = `${foundTool.name?.toLowerCase()}, ${foundTool.category?.toLowerCase()}, ai tools, artificial intelligence, ${foundTool.category?.toLowerCase()} software, best ${foundTool.category?.toLowerCase()} tools, Best AI tools Directory - Fizoval `;

  return {
    title,
    description,
    keywords,
    robots: { index: true, follow: true, maxImagePreview: 'large' },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://fizoval.com/${category}/${tool}`,
      siteName: 'Fizoval',
      images: [
        {
          url: foundTool.image_url || 'https://fizoval.com/FeaturingIMG.png',
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [foundTool.image_url || 'https://fizoval.com/FeaturingIMG.png'],
    },
    alternates: {
      canonical: `https://fizoval.com/${category}/${tool}`,
    },
  };
}

export default async function ToolDetailPage({ params }) {
  const { category, tool } = await params;
  const categorySlug = getCategoryFromSeoSlug(category);
  const toolParam = tool.toLowerCase();

  // Find the tool by slugified name
  const foundTool = aiTools.find(t => {
    const toolCategorySlug = (t.category || '').toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
    return (
      toolCategorySlug === categorySlug &&
      t.name && slugify(t.name) === toolParam
    );
  });

  if (!foundTool) {
    notFound();
  }

  
  // Generate category page URL
  const categoryPageUrl = `/${category}`;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto md:px-8 md:py-12">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Image Gallery Section */}
            <div className="w-full lg:w-5/12">
              <div className="sticky top-8">
                
                <div className="p-4">
                   

                 
                   <div className="relative w-full aspect-[16/9] mb-8 rounded-2xl overflow-hidden shadow-2xl md:mt-10">
                    <a href={foundTool.external_link} target="_blank" rel="noopener noreferrer" className="block rounded-xs">
                    <Image 
                     src={foundTool.image_url}
                        alt={foundTool.name || foundTool.title} 
                      fill 
                      className="object-cover" 
                      priority 
                    />
                    </a>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                    {/* Visit Tool Button */}
                {foundTool.external_link && (
                  <div className="pt-2 flex flex-col justify-center lg:flex-row gap-4">
                    <a
                      href={foundTool.external_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-600 text-white text-center py-3 px-8 rounded-xl font-semibold text-base hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                    >
                      Visit Tool ↗
                    </a>
                    <Link
                href={categoryPageUrl}
                className="inline-block bg-blue-50 text-blue-700 border border-blue-500 text-center py-3 px-8 rounded-xl font-semibold text-base  transition-colors duration-200 shadow-lg"
                  >
                More {foundTool.category} Tools →
              </Link>
                  </div>
                )}
                </div>
              </div>
            </div>

            {/* Product Details Section */}
            <div className="w-full lg:w-7/12">
              <div className="sticky top-8 space-y-6 p-4">
               
 {/* Category Badge */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                    {foundTool.category}
                  </span>
                  {foundTool.pricing_model && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
                      {foundTool.pricing_model}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  {foundTool.name || foundTool.title}
                </h1>
   
                

                {/* Full Description */}
                {foundTool.full_description && (
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 my-2">About this tool</h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg my-2 text-justify">
                      {foundTool.name} is an innovative tool in the {foundTool.category} category. It is designed to help users with {foundTool.description}, making complex tasks much simpler and more accessible. By using advanced AI technology, {foundTool.name} allows individuals and businesses to save time, reduce costs, and improve the overall quality of their work.
                    </p>
                     <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg my-2 text-justify">
                     {foundTool.full_description}
                    </p>

                     
                     <h2 className="text-xl font-bold text-gray-900 my-2 mt-4">Pricing</h2>
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg my-2 text-justify">
                  
{foundTool.name} is available under a {foundTool.pricing_model} pricing model. This makes it flexible for users who want to test it out as well as those who need advanced features for professional or large-scale projects. For full details on pricing and features, you can visit the <a
                      href={foundTool.external_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-blue-600 hover:text-blue-700 transition-colors duration-200"
                    >
                       {foundTool.name}
                    </a> website.

                    </p>

                  </div>
                )}

              
              </div>
            </div>
          </div>
        </div>

       
       
      </main>
      
      <div className="container mx-auto px-4 md:px-12 ">
         {/* CTA Section */}
         <div className="mt-16 mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Explore AI Tools?
                </h2>
                <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                  Discover over 5000+ cutting-edge AI tools that can transform your workflow. 
                  From productivity to creativity, find the perfect AI solution for your needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/ai-tools" 
                    className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    Explore AI Tools →
                  </Link>
                  
                </div>
                
              </div>
            </div>
          </div>
      </div>

      <HomeBlogSection />

      <Footer />
    </div>
  );
}
