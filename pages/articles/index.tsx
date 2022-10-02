import MoreStories from '../../components/more-stories';
import HeroPost from '../../components/hero-post';
import { getAllPosts } from '../../lib/api';
import Post from '../../interfaces/post';
import * as React from 'react';
import { Container } from '@mui/material';

const Articles = () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'coverImage', 'excerpt']) as Post[];
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Container sx={{ marginTop: 6 }}>
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </>
  );
};

export default Articles;
