import Image from 'next/image';
import Link from 'next/link';

const getSeoCategorySlug = (categoryName) => {
  return categoryName.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-') + '-ai-tools';
};
const slugify = (str) => {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // replace non-alphanumeric with dash
    .replace(/^-+|-+$/g, '')     // trim leading/trailing dashes
    .replace(/-+/g, '-');        // collapse multiple dashes
};

const ToolCard = ({ title, excerpt, external_link, category, image_url, name }) => {
  const toolSlug = slugify(name || title);
  const internalLink = `/${getSeoCategorySlug(category)}/${toolSlug}`;
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col h-full">
      <div className="relative h-48 w-full">
        <Image
          src={image_url}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-bricolage text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 font-sen mb-4 line-clamp-3 flex-1">
          {excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full mb-2">
            {category}
          </span>
          <Link href={internalLink} className="text-blue-600 hover:text-blue-800 text-sm font-medium font-sen transition-colors">
            View Tool →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToolCard; 