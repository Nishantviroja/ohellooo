'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function BlogGenerator() {
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    excerpt: '',
    date: new Date().toISOString().split('T')[0], // Today's date
    author: 'Surali Patel', // Default author
    category: 'AI Tools', // Default category
    readTime: '5 min read', // Default read time
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500&q=80', // Default image
    slug: '',
    content: '',
    metadata: {
      title: '',
      desc: '',
      keyword: ''
    }
  });

  const [generatedJson, setGeneratedJson] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMetadataChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      metadata: {
        ...prev.metadata,
        [name]: value
      }
    }));
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-');
  };

  const handleTitleChange = (e) => {
    const title = e.target.value;
    setFormData(prev => ({
      ...prev,
      title,
      slug: generateSlug(title)
    }));
  };

  const formatDateForDisplay = (dateString) => {
    const date = new Date(dateString);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };

  const generateAutoId = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    return `${day}${month}${year}${hours}${minutes}${seconds}`;
  };

  const generateJson = () => {
    const blogPost = {
      id: parseInt(formData.id) || generateAutoId(),
      title: formData.title,
      excerpt: formData.excerpt,
      date: formatDateForDisplay(formData.date),
      author: formData.author,
      category: formData.category,
      readTime: formData.readTime,
      image: formData.image,
      slug: formData.slug,
      content: formData.content,
      metadata: {
        title: formData.metadata.title,
        desc: formData.metadata.desc,
        keyword: formData.metadata.keyword
      }
    };

    const jsonString = JSON.stringify(blogPost, null, 2);
    setGeneratedJson(jsonString);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedJson);
    alert('JSON copied to clipboard!');
  };

  const clearForm = () => {
    setFormData({
      id: '',
      title: '',
      excerpt: '',
      date: new Date().toISOString().split('T')[0], // Today's date
      author: 'Surali Patel', // Default author
      category: 'AI Tools', // Default category
      readTime: '5 min read', // Default read time
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500&q=80', // Default image
      slug: '',
      content: '',
      metadata: {
        title: '',
        desc: '',
        keyword: ''
      }
    });
    setGeneratedJson('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Blog Post Generator
            </h1>
            <p className="text-xl text-gray-600">
              Create blog posts with live preview
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Left Section - Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Blog Form</h2>
              <form className="space-y-6 text-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Title *
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleTitleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter blog post title"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Slug (auto-generated)
                    </label>
                    <input
                      type="text"
                      name="slug"
                      value={formData.slug}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                      placeholder="Auto-generated slug"
                      
                    />
                  </div>

                  

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Author *
                    </label>
                    <select
                      name="author"
                      value={formData.author}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="Surali Patel">Surali Patel</option>
                      <option value="Nishant Patel">Nishant Patel</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Category *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="AI Tools">AI Tools</option>
                      <option value="Tutorial">Tutorial</option>
                      <option value="Tools Roundup">Tools Roundup</option>
                      <option value="News">News</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Read Time *
                    </label>
                    <input
                      type="text"
                      name="readTime"
                      value={formData.readTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter read time"
                      required
                    />
                  </div>

                 

                 
                </div>
                {/* Metadata Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Metadata Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.metadata.title}
                      onChange={handleMetadataChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="SEO title for this blog post"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Metadata Description
                    </label>
                    <input
                      type="text"
                      name="desc"
                      value={formData.metadata.desc}
                      onChange={handleMetadataChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="SEO description for this blog post"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Metadata Keywords
                    </label>
                    <input
                      type="text"
                      name="keyword"
                      value={formData.metadata.keyword}
                      onChange={handleMetadataChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Comma-separated keywords (e.g. AI, tools, blog)"
                    />
                  </div>
                </div>
                <div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Image URL *
                    </label>
                    <input
                      type="url"
                      name="image"
                      value={formData.image}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter image URL"
                      required
                    />
                  </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Excerpt *
                    </label>
                    <textarea
                      name="excerpt"
                      value={formData.excerpt}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter a brief excerpt"
                      required
                    />
                  </div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Content (HTML) *
                  </label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    rows="12"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                    placeholder="Enter HTML content with tags like <h1>, <p>, <ul>, etc."
                    required
                  />
                 
                  <div className="mt-3 space-y-2">
                    <p className="text-xs font-medium text-gray-600">Quick Insert Buttons:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          const currentContent = formData.content;
                          const newContent = currentContent + '\n\n<h2>Sub Heading</h2>\n<p>Your content here...</p>';
                          setFormData(prev => ({ ...prev, content: newContent }));
                        }}
                        className="bg-orange-100 hover:bg-orange-200 text-orange-800 font-medium py-2 px-3 rounded text-xs transition-colors duration-200"
                      >
                        H2
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          const currentContent = formData.content;
                          const newContent = currentContent + '\n\n<h3>Small Heading</h3>\n<p>Your content here...</p>';
                          setFormData(prev => ({ ...prev, content: newContent }));
                        }}
                        className="bg-yellow-100 hover:bg-yellow-200 text-yellow-800 font-medium py-2 px-3 rounded text-xs transition-colors duration-200"
                      >
                        H3
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          const currentContent = formData.content;
                          const newContent = currentContent + '\n\n<p>This is a paragraph with your content. You can add formatting here.</p>';
                          setFormData(prev => ({ ...prev, content: newContent }));
                        }}
                        className="bg-green-100 hover:bg-green-200 text-green-800 font-medium py-2 px-3 rounded text-xs transition-colors duration-200"
                      >
                        P
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          const currentContent = formData.content;
                          const newContent = currentContent + '\n\n<p>This text has <strong>bold text</strong> formatting.</p>';
                          setFormData(prev => ({ ...prev, content: newContent }));
                        }}
                        className="bg-red-100 hover:bg-red-200 text-red-800 font-medium py-2 px-3 rounded text-xs transition-colors duration-200"
                      >
                        Bold
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          const currentContent = formData.content;
                          const newContent = currentContent + '\n\n<p>This text has <em>italic text</em> formatting.</p>';
                          setFormData(prev => ({ ...prev, content: newContent }));
                        }}
                        className="bg-pink-100 hover:bg-pink-200 text-pink-800 font-medium py-2 px-3 rounded text-xs transition-colors duration-200"
                      >
                        Italic
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          const currentContent = formData.content;
                          const newContent = currentContent + '\n\n<ul>\n<li>First item</li>\n<li>Second item</li>\n<li>Third item</li>\n</ul>';
                          setFormData(prev => ({ ...prev, content: newContent }));
                        }}
                        className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium py-2 px-3 rounded text-xs transition-colors duration-200"
                      >
                        UL
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          const currentContent = formData.content;
                          const newContent = currentContent + '\n\n<ol>\n<li>First numbered item</li>\n<li>Second numbered item</li>\n<li>Third numbered item</li>\n</ol>';
                          setFormData(prev => ({ ...prev, content: newContent }));
                        }}
                        className="bg-indigo-100 hover:bg-indigo-200 text-indigo-800 font-medium py-2 px-3 rounded text-xs transition-colors duration-200"
                      >
                        OL
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          const currentContent = formData.content;
                          const newContent = currentContent + '\n\n<blockquote>\nThis is a blockquote with your important content. It will have special styling with a left border and background.\n</blockquote>';
                          setFormData(prev => ({ ...prev, content: newContent }));
                        }}
                        className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-medium py-2 px-3 rounded text-xs transition-colors duration-200"
                      >
                        Quote
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          const currentContent = formData.content;
                          const newContent = currentContent + '\n\n<table>\n<thead>\n<tr>\n<th>Header 1</th>\n<th>Header 2</th>\n<th>Header 3</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Data 1</td>\n<td>Data 2</td>\n<td>Data 3</td>\n</tr>\n<tr>\n<td>Data 4</td>\n<td>Data 5</td>\n<td>Data 6</td>\n</tr>\n</tbody>\n</table>';
                          setFormData(prev => ({ ...prev, content: newContent }));
                        }}
                        className="bg-violet-100 hover:bg-violet-200 text-violet-800 font-medium py-2 px-3 rounded text-xs transition-colors duration-200"
                      >
                        Table
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          const currentContent = formData.content;
                          const newContent = currentContent + '\n\n<p>Here is some <code>inline code</code> with gray background.</p>';
                          setFormData(prev => ({ ...prev, content: newContent }));
                        }}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-3 rounded text-xs transition-colors duration-200"
                      >
                        Inline Code
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          const currentContent = formData.content;
                          const newContent = currentContent + '\n\n<pre>\n// This is a code block\nfunction example() {\n  console.log("Hello World");\n  return true;\n}\n</pre>';
                          setFormData(prev => ({ ...prev, content: newContent }));
                        }}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium py-2 px-3 rounded text-xs transition-colors duration-200"
                      >
                        Code
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          const currentContent = formData.content;
                          const newContent = currentContent + '\n\n<p>This is a paragraph with a <a href="https://example.com">link</a> in it.</p>';
                          setFormData(prev => ({ ...prev, content: newContent }));
                        }}
                        className="bg-teal-100 hover:bg-teal-200 text-teal-800 font-medium py-2 px-3 rounded text-xs transition-colors duration-200"
                      >
                        Link
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <button
                    type="button"
                    onClick={generateJson}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    Generate JSON
                  </button>
                  <button
                    type="button"
                    onClick={clearForm}
                    className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    Clear Form
                  </button>
                </div>
              </form>
            </div>

            {/* Right Section - Live Preview */}
            <div className="bg-white rounded-2xl shadow-xl p-8 overflow-y-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Live Preview</h2>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-500 text-center">https://fizoval.com/blog/{formData.slug || 'slug'}</p>
              </div>
              
              <div className="blog-preview h-[calc(100vh-400px)] ">
                {/* Metadata Preview as Google Search Result */}
                <div className="mb-8 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="mb-1">
                    <span className="block text-[#1a0dab] text-lg leading-tight font-medium truncate" style={{cursor: 'pointer'}}>
                      {formData.metadata.title || <span className='italic text-gray-400'>Meta Title Example</span>}
                    </span>
                  </div>
                  <div className="mb-1">
                    <span className="block text-[#006621] text-sm leading-tight">
                      {`https://fizoval.com/blog/${formData.slug || 'slug'}`}
                    </span>
                  </div>
                  <div>
                    <span className="block text-gray-700 text-base leading-snug">
                      {formData.metadata.desc || <span className='italic text-gray-400'>Meta description preview goes here. This is how your blog might appear in Google search results.</span>}
                    </span>
                  </div>
                </div>
                {/* Article Header */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {formData.category || 'Category'}
                    </span> 
                    <span className="text-gray-600 text-sm">
                      {formData.date ? formatDateForDisplay(formData.date) : 'Date'} · {formData.readTime || 'Read Time'}
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                    {formData.title || 'Blog Title'}
                  </h1>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
                      {(formData.author || 'A').charAt(0).toUpperCase()}
                    </div>
                    <span className="ml-3 text-gray-600 font-medium">{formData.author || 'Author Name'}</span>
                  </div>
                </div>

                {/* Featured Image */}
                {formData.image && (
                  <div className="relative w-full aspect-[16/9] mb-8 rounded-xl overflow-hidden shadow-lg">
                    <Image 
                      src={formData.image} 
                      alt={formData.title || 'Blog post'} 
                      fill 
                      className="object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                )}

                {/* Article Content */}
                <article className="bg-transparent rounded-xl">
                  {/* Excerpt */}
                  {formData.excerpt && (
                    <div className="mb-6">
                      <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4"></div>
                      <p className="text-lg text-gray-700 font-sen leading-relaxed italic">
                        &ldquo;{formData.excerpt}&rdquo;
                      </p>
                    </div>
                  )}

                  {/* Main Content */}
                  <div 
                    className="blog-content text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: formData.content || '<p>Start typing your content...</p>' }}
                  />
                </article>
              </div>
            </div>
          </div>

          {/* Full Width JSON Output */}
          {generatedJson && (
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  Generated JSON
                </h3>
                <button
                  onClick={copyToClipboard}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Copy JSON
                </button>
              </div>
              <div className="bg-gray-900 text-green-400 p-6 rounded-lg overflow-x-auto">
                <pre className="text-sm">{generatedJson}</pre>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
} 