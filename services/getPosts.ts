export const getAllPosts = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=30'
  );
  // const response = await fetch('/api/posts');
  if (!response.ok) throw new Error('Error while fetching posts');
  return response.json();
};

export const getPostsBySearch = async (search: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?q=${search}`
  );
  // const response = await fetch(`/api/posts?q=${search}`);
  if (!response.ok) throw new Error('Error while fetching posts');
  return response.json();
};
