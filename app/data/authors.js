// Author data with unique IDs mapped to author names from blog posts
const authors = [
  {
    id: 'nishant-viroja',
    name: 'Nishant Viroja',
    about: 'Nishant Viroja is an Tech enthusiast with dedicated to making AI accessible, understandable, and actionable for everyone. He provide up-to-date insights on AI trends, innovations, and practical applications, helping readers and professionals stay informed in the rapidly evolving world of AI.',
    linkedin: 'https://linkedin.com/in/nishant-patel',
    avatar: 'https://blogger.googleusercontent.com/img/a/AVvXsEj7vxyHtrxzOtRV7M9jt-Am83SucvRfgucE2DfshuhmXjerWYHSbiQn3oeSUMzk2OZCiI87e47Hi8jK8UiYr6H6q7Ktn5OiODnvzqNbYx6teMEcTn_V4s00Pfs0_2aHzgWLi8tbAG5-r-fpTWm2ZIB6rKxvV6o4crzJXt2wGnTo0hHcthOhsBjKJ6YFQFlQ=s16000',
    social: {
      linkedin: 'https://linkedin.com/in/nishant-viroja',
      twitter: 'https://x.com/NishantViroja',
      peerlist:'https://peerlist.io/nishantviroja',
      mail:'contact@fizoval.com'
     
    }
  },
  {
    id: 'surali-patel',
    name: 'Surali Patel',
    about: 'Surali Patel is passionate about technology and artificial intelligence, dedicated to helping everyone understand and use AI effectively. She writes about the latest AI trends, innovations, and real-world applications, empowering readers and professionals to stay informed in today’s rapidly evolving AI landscape.',
   linkedin: 'https://linkedin.com/in/surali-patel',
    avatar: 'https://blogger.googleusercontent.com/img/a/AVvXsEiymOynqcRLARr77Mof5tj9sx20gOAPPNJDmYMTmYtzCm8HJnvDgkfCWPQdnrhXFyJaN6xHYQcagrGlLd4Ow2E7FwiV9zY4f6o2NLcs7X8H76kkAM3uy0BntmfJB6VM2OWkE4i5V7hu9gRLRJ8zNVcBmzl-28vfwRAU9TTIQnbyAB7NniNjSSgwJVOqYhW0=s16000',
    social: {
      linkedin: 'https://www.linkedin.com/in/surali-asodariya-289a85219/',
      twitter: 'https://twitter.com/surali_patel',
      peerlist: 'https://peerlist.io/suralipatel',
      mail:'contact@fizoval.com'
      
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
