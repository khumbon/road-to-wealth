import React from 'react';
import { Heading } from '../../components';
import { Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Container sx={{ marginTop: 6 }}>
      <Heading>About</Heading>
      <Typography>
        Who am I? I’m Khumbo, a 24-year old, Malawian-South African living and working in the UK (it’s a mouthful). I
        work as a Mechanical Engineer/Software Developer, but my real passion is all things personal finance and
        investing. I started this channel to reach people who, like me, may not have grown up with a financial education
        but have realised it’s essential to living life on your terms. End goal: FINANCIAL EDUCATION FOR ALL! Medium
        goal: taking you guys along with me through my financial journey. If you’d like to contact me, feel free to
        email me on roadtowealth7@gmail.com. Join Road to Wealth and stay tuned for more videos on financial literacy!{' '}
      </Typography>
    </Container>
  );
};

export default About;
