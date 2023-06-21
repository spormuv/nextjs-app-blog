import { getAllPosts, getPostsBySearch } from '@/services/getPosts';
import { PostType } from '@/types/types';
import { create } from 'zustand';

type UsePosts = {
  posts: PostType[];
  loading: boolean;
  getAllPosts: () => Promise<void>;
  getPostsBySearch: (value: string) => Promise<void>;
};

export const usePosts = create<UsePosts>()(set => ({
  posts: [],
  loading: false,
  getAllPosts: async () => {
    set({ loading: true });
    const posts = await getAllPosts();
    set({ posts, loading: false });
  },
  getPostsBySearch: async (search: string) => {
    set({ loading: true });
    const posts = await getPostsBySearch(search);
    set({ posts, loading: false });
  },
}));
