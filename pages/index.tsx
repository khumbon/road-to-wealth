import MoreStories from '../components/more-stories';
import { getAllPosts } from '../lib/api';
import Post from '../interfaces/post';
import * as React from 'react';
import { Container } from '@mui/material';

interface Props {
  allPosts: Post[];
}

export default function Index({ allPosts }: Props) {
  const samplePosts = allPosts.slice(0, 2);
  return (
    <>
      <Container sx={{ marginTop: 6 }}>{samplePosts.length > 0 && <MoreStories posts={samplePosts} />}</Container>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'coverImage', 'excerpt']);

  return {
    props: { allPosts },
  };
};
