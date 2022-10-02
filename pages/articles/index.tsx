import MoreStories from '../../components/more-stories';
import HeroPost from '../../components/hero-post';
import { getAllPosts } from '../../lib/api';
import Post from '../../interfaces/post';
import * as React from 'react';
import { Container } from '@mui/material';
import { Heading } from '../../components';

interface ArticlesProps {
  allPosts: Post[];
}

const Articles = ({ allPosts }: ArticlesProps) => {
  return (
    <>
      <Heading>Articles</Heading>
    </>
  );
};

export default Articles;
