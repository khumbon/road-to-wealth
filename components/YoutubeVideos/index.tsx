import * as React from 'react';
import { Heading } from '../Heading';
import { YoutubeContent } from '../YoutubeContent';

export const YoutubeVideos = ({ videoIds }: { videoIds: string[] }) => {
  return (
    <>
      <Heading>Videos</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {videoIds.map((videoId) => (
          <YoutubeContent videoEmbedId={videoId} key={videoId} />
        ))}
      </div>
    </>
  );
};
