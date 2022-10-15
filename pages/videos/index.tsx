import { Container } from '@mui/material';
import React from 'react';
import { Heading } from '../../components';
import { YoutubeContent } from '../../components/YoutubeContent';

const Videos = () => {
  return (
    <Container sx={{ marginTop: 6 }}>
      <Heading>Videos</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        <YoutubeContent videoEmbedId="7JF-5H-hyfQ" />
        <YoutubeContent videoEmbedId="q5oZfN7lJpo" />
        <YoutubeContent videoEmbedId="DzQXw_Oyd7k" />
      </div>
    </Container>
  );
};

export default Videos;
