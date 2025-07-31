// app/image-sitemap.js
import blogPosts from './data/blogPosts';

export default function imageSitemap() {
  const baseUrl = 'https://fizoval.com';

  // Collect all images from blog posts
  const blogImages = blogPosts.map((post) => ({
    url: post.image,
    title: post.title,
    caption: post.excerpt,
    geoLocation: 'Worldwide',
    license: 'https://creativecommons.org/licenses/by/4.0/',
  }));

  // Website logo and branding images
  const websiteImages = [
    {
      url: `${baseUrl}/Fizoval.png`,
      title: 'Fizoval - Best AI Tools Directory',
      caption: 'Fizoval logo and branding',
      geoLocation: 'Worldwide',
      license: 'https://creativecommons.org/licenses/by/4.0/',
    },
    {
      url: `${baseUrl}/FeaturingIMG.png`,
      title: 'Fizoval - AI Tools Directory Featured Image',
      caption: 'Featured image for AI tools and blog posts',
      geoLocation: 'Worldwide',
      license: 'https://creativecommons.org/licenses/by/4.0/',
    },
    
  ];

  // Combine all images
  const allImages = [...websiteImages, ...blogImages];

  return allImages.map((image) => ({
    url: image.url,
    title: image.title,
    caption: image.caption,
    geoLocation: image.geoLocation,
    license: image.license,
  }));
} 