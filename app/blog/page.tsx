import { Metadata } from 'next';
import Link from 'next/link';

type Post = {
  id: number;
  title: string;
  body: string;
  userId?: number;
};

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60,
    },
  });
  if (!response.ok) throw new Error('Error while fetching posts');

  return response.json();
}

export const metadata: Metadata = {
  title: 'Blog | Next App',
};

const Blog = async () => {
  const posts: Post[] = await getData();
  return (
    <>
      <h1>Blog page</h1>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Blog;
