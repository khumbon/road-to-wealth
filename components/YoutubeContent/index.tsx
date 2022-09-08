import React from 'react';
import { StyledIframe, Video } from './index.styles';

interface YoutubeContentProps {
  videoEmbedId: string;
}
export const YoutubeContent = ({ videoEmbedId }: YoutubeContentProps) => (
  <Video>
    <StyledIframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${videoEmbedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </Video>
);
