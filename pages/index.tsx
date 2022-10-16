import MoreStories from '../components/more-stories';
import { getAllPosts } from '../lib/api';
import Post from '../interfaces/post';
import * as React from 'react';
import { Container } from '@mui/material';
import { videoIds } from '../copy/videos';
import { YoutubeContent, YoutubeVideos } from '../components';

import { Button, Grid, Box } from '@mui/material';
import { useRouter } from 'next/router';

interface Props {
  allPosts: Post[];
}

export default function Index({ allPosts }: Props) {
  const samplePosts = allPosts.slice(0, 2);
  const sampleVideoIds = videoIds.slice(0, 2);
  const router = useRouter();

  const routerClick = (event) => {
    router.push(`/${event.target.innerText.toLowerCase()}`);
  };

  return (
    <>
      <Container sx={{ marginTop: 6 }}>{samplePosts.length > 0 ? <MoreStories posts={samplePosts} /> : null}</Container>
      <Container sx={{ marginTop: 6 }}>
        {sampleVideoIds.length > 0 ? <YoutubeVideos videoIds={sampleVideoIds} /> : null}
        <Button
          href="https://www.youtube.com/channel/UCOEn7iKMc3ct5MRJMTM-vHQ"
          sx={{ my: 2, color: 'white', paddingTop: '15px' }}
        >
          See more Videos
        </Button>
      </Container>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'coverImage', 'excerpt']);

  return {
    props: { allPosts },
  };
};
