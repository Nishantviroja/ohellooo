// Author data with unique IDs mapped to author names from blog posts
const authors = [
  {
    id: 'nishant-patel',
    name: 'Nishant Patel',
    about: 'AI enthusiast and tech writer with 5+ years of experience in machine learning and automation. Passionate about making AI accessible to everyone.',
    linkedin: 'https://linkedin.com/in/nishant-patel',
    avatar: 'https://blogger.googleusercontent.com/img/a/AVvXsEj7vxyHtrxzOtRV7M9jt-Am83SucvRfgucE2DfshuhmXjerWYHSbiQn3oeSUMzk2OZCiI87e47Hi8jK8UiYr6H6q7Ktn5OiODnvzqNbYx6teMEcTn_V4s00Pfs0_2aHzgWLi8tbAG5-r-fpTWm2ZIB6rKxvV6o4crzJXt2wGnTo0hHcthOhsBjKJ6YFQFlQ=s16000',
    bio: 'Nishant is a seasoned AI researcher and content creator who has been at the forefront of artificial intelligence developments. With a background in computer science and extensive experience in machine learning, he specializes in translating complex AI concepts into accessible content for developers, entrepreneurs, and tech enthusiasts.',
    expertise: ['Machine Learning', 'AI Tools', 'Automation', 'Content Creation'],
    social: {
      linkedin: 'https://linkedin.com/in/nishant-patel',
      twitter: 'https://twitter.com/nishant_patel',
      github: 'https://github.com/nishant-patel'
    }
  },
  {
    id: 'surali-patel',
    name: 'Surali Patel',
    about: 'Tech entrepreneur and AI strategist with expertise in business development and AI implementation. Focused on helping businesses leverage AI for growth.',
    linkedin: 'https://linkedin.com/in/surali-patel',
    avatar: 'https://blogger.googleusercontent.com/img/a/AVvXsEiymOynqcRLARr77Mof5tj9sx20gOAPPNJDmYMTmYtzCm8HJnvDgkfCWPQdnrhXFyJaN6xHYQcagrGlLd4Ow2E7FwiV9zY4f6o2NLcs7X8H76kkAM3uy0BntmfJB6VM2OWkE4i5V7hu9gRLRJ8zNVcBmzl-28vfwRAU9TTIQnbyAB7NniNjSSgwJVOqYhW0=s16000',
    bio: 'Surali is a tech entrepreneur and business strategist with a passion for AI innovation. With years of experience in business development and technology implementation, he helps companies identify and integrate AI solutions that drive real business value and growth.',
    expertise: ['Business Strategy', 'AI Implementation', 'Entrepreneurship', 'Technology Leadership'],
    social: {
      linkedin: 'https://linkedin.com/in/surali-patel',
      twitter: 'https://twitter.com/surali_patel',
      website: 'https://fizoval.com'
    }
  }
];

// Helper function to get author by name (fallback to Fizoval Team if not found)
export function getAuthorByName(authorName) {
  const author = authors.find(a => 
    a.name.toLowerCase() === authorName.toLowerCase()
  );
  return author || authors.find(a => a.id === 'fizoval-team');
}

// Helper function to get author by ID
export function getAuthorById(authorId) {
  return authors.find(a => a.id === authorId);
}

// Get all authors
export function getAllAuthors() {
  return authors;
}

// Get authors that have published posts (you can extend this based on your blog data)
export function getActiveAuthors() {
  return authors; // For now, return all authors
}

export default authors;
