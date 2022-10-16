import { Container } from '@mui/material';
import React from 'react';
import { YoutubeVideos } from '../../components';
import { videoIds } from '../../copy/videos';

const Videos = () => {
  return (
    <Container sx={{ marginTop: 6 }}>
      <YoutubeVideos videoIds={videoIds} />
    </Container>
  );
};

export default Videos;
