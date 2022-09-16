import Head from "next/head";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import PostCard from "../../components/PostCard";
import { getCategories, getCategoryPosts } from "../../services";

export default function Category({ posts }) {
  return (
    <>
      <Head>
        <title>Category | React</title>
      </Head>
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-12 container mx-auto">
        {posts.map((each, index) => (
          <div key={index} className="col-span-8">
            <PostCard post={each} />
          </div>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const data = await getCategoryPosts(params.slug);
  const posts = data.posts;

  return {
    props: { posts },
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
