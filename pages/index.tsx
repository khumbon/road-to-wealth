import MoreStories from '../components/more-stories';
import { getAllPosts } from '../lib/api';
import Post from '../interfaces/post';
import * as React from 'react';
import { Container, Grid, useMediaQuery } from '@mui/material';
import { videoIds } from '../copy/videos';
import { Download, Heading, YoutubeVideos } from '../components';
import { Button } from '@mui/material';
import { screenSizes } from '../constants';
import { downloads } from '../copy/downloads';

interface Props {
  allPosts: Post[];
}

export default function Index({ allPosts }: Props) {
  const samplePosts = allPosts.slice(0, 2);
  const sampleVideoIds = videoIds.slice(0, 2);
  const sampleDownloads = downloads.slice(0, 2);
  const isDesktop = useMediaQuery(`(min-width: ${screenSizes.smallDesktop}px)`);

  return (
    <>
      <Container sx={{ marginTop: 6 }}>{samplePosts.length > 0 ? <MoreStories posts={samplePosts} /> : null}</Container>
      <Container sx={{ marginTop: 3, marginBottom: 6 }}>
        {sampleVideoIds.length > 0 ? (
          <>
            <YoutubeVideos videoIds={sampleVideoIds} />
            <Grid width={!isDesktop ? '300px' : '350px'}>
              <Button
                href="https://www.youtube.com/channel/UCOEn7iKMc3ct5MRJMTM-vHQ"
                variant="contained"
                color="primary"
              >
                See more Videos
              </Button>
            </Grid>
          </>
        ) : null}
      </Container>
      <Container sx={{ marginTop: 3, marginBottom: 6 }}>
        <Heading>Downloads</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-16">
          {sampleDownloads.map((downloadInfo) => (
            <Download downloadInfo={downloadInfo} key={downloadInfo.type} isPreview={true} />
          ))}
        </div>
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
