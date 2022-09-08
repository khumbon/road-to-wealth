import Container from '../container';
import * as React from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';
import { StyledFooter } from './index.styles';

const Footer = () => {
  return (
    <StyledFooter className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Join my Road To Wealth...
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <Link href="https://www.youtube.com/channel/UCOEn7iKMc3ct5MRJMTM-vHQ/featured">
              <YouTubeIcon style={{ fontSize: '80px' }} />
            </Link>
            <Link href="https://www.instagram.com/roadtowealth7/">
              <InstagramIcon style={{ fontSize: '60px' }} />
            </Link>
          </div>
        </div>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
