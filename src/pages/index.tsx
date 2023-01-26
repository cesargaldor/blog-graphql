import Head from "next/head";
import { GET_POSTS } from "@/queries/posts";
import { GetStaticProps } from "next";
import { client } from "./_app";
import BlogCard from "@/components/blogCard";

export default function Home({ posts }: { posts: any }) {
  return (
    <div className="mt-6 max-w-5xl mx-auto">
      <h1 className="font-bold text-2xl">Últimos artículos</h1>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {posts?.map((post: any, idx: number) => (
          <BlogCard
            post={post}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: GET_POSTS,
  });

  return {
    props: {
      posts: data.posts,
    },
  };
};
