import Container from '../container';
import * as React from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';
import { StyledFooter } from './index.styles';
import { Typography } from '@mui/material';

export const Footer = () => {
  return (
    <StyledFooter className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3
            className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2"
            style={{ color: 'white' }}
          >
            Join my Road To Wealth...
          </h3>
          <div className="flex flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <Link href="https://www.youtube.com/channel/UCOEn7iKMc3ct5MRJMTM-vHQ/featured">
              <YouTubeIcon style={{ fontSize: '80px', color: 'white' }} />
            </Link>
            <Link href="https://www.instagram.com/roadtowealth7/">
              <InstagramIcon style={{ fontSize: '60px', color: 'white' }} />
            </Link>
          </div>
        </div>
        <Typography variant="caption" display="block" gutterBottom color="white">
          Disclaimer: I do not provide financial advice and I am not a qualified licensed financial advisor. All
          information found here is for informational, entertainment or educational purposes only and should not be
          construed as personal financial advice. While the information provided is believed to be accurate, it may
          include errors or inaccuracies.
        </Typography>
        <br />
      </Container>
    </StyledFooter>
  );
};
