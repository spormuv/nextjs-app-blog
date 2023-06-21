'use client';

import { getPostsBySearch } from '@/services/getPosts';
import { FormEventHandler, useState } from 'react';
import useSWR from 'swr';
// import { usePosts } from '@/store';

const PostSearch = () => {
  const { mutate } = useSWR('posts');
  const [search, setSearch] = useState<string>('');
  // const getPostsBySearch = usePosts(state => state.getPostsBySearch);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();
    const posts = await getPostsBySearch(search);
    mutate(posts);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="search"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default PostSearch;
