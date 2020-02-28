import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Insta from '../components/insta';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';

export default () => {
  const posts = usePosts();

  return (
    <>
      <Hero />
      <Layout>
        <h1>Home</h1>
        <div>Hello Frontend Masters!</div>
        <Link to="about">Learn about me &rarr;</Link>
        <h2>Read my posts</h2>
        {posts.map(post => (
          // <pre>{JSON.stringify(post, null, 2)}</pre>
          <PostPreview key={post.slug} post={post} />
        ))}
        <Insta />
      </Layout>
    </>
  );
};
