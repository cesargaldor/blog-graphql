import { FC } from "react";
import { GET_POST, GET_POSTS_SLUGS } from "@/queries/posts";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Inter } from "@next/font/google";
import { client } from "../_app";
import styles from "../../styles/prism.module.css";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  title: string;
  url: string;
  date: string;
  source: any;
  html: string;
};

const Post: FC<Props> = ({ title, url, date, source, html }) => {
  return (
    <>
      <Head>
        <title>Blog - {title}</title>
      </Head>
      <div className="w-full">
        <div className="h-fit flex items-center justify-between bg-gray-50">
          <div className="w-1/2 flex flex-col items-center justify-center">
            <div className={`ml-auto max-w-lg w-7/12 ${inter.className}`}>
              <p className="text-sm text-gray-500 pb-1">{new Date(date).toLocaleDateString()}</p>
              <h1 className="text-4xl font-bold leading-normal pr-6">{title}</h1>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${url})` }}
            className="w-1/2 h-[39rem] bg-no-repeat bg-cover bg-center"></div>
        </div>
        <div className="max-w-4xl mx-auto mt-6">
          <div
            className={styles.blog}
            dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
      </div>
    </>
  );
};

export default Post;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await client.query({
    query: GET_POST,
    variables: { slug: params?.slug },
  });

  const { title, date, cover, content } = data.posts[0];

  return {
    props: {
      title: title,
      date: date,
      url: cover?.url ?? null,
      html: content.html,
    },
  };
};

export async function getStaticPaths() {
  const { data } = await client.query({
    query: GET_POSTS_SLUGS,
  });

  return {
    paths: data.posts.map((p: { slug: string }) => `/blog/${p.slug}`),
    fallback: false,
  };
}
