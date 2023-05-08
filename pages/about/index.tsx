import React from 'react';
import { Heading } from '../../components';
import { Container, List, ListItem, ListItemIcon } from '@mui/material';
import { Text } from '../../components';
import Email from '@mui/icons-material/Email';
import YouTube from '@mui/icons-material/YouTube';
import Instagram from '@mui/icons-material/Instagram';
import Image from 'next/image';

const About = () => {
  return (
    <Container sx={{ marginTop: 6, marginBottom: 6 }}>
      <Heading>About me</Heading>
      <Text align="center">
        I’m Khumbo, a Malawian-South African living and working in the UK (it’s a mouthful). I work as a Mechanical
        Engineer/Software Developer, but my real passion is all things personal finance and investing. I started this
        channel to reach people who, like me, may not have grown up with a financial education but have realised it’s
        essential to living life on your terms.
      </Text>
      <Text align="center">End goal: FINANCIAL EDUCATION FOR ALL!</Text>
      <Text align="center">Medium goal: taking you guys along with me through my financial journey.</Text>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Image
          src="/assets/about/khumbo-standing-at-wedding.jpg"
          alt="Khumbo standing on grass smiling"
          width={300}
          height={400}
        />
      </div>
      <Text>Reach out to me:</Text>
      <List>
        <ListItem>
          <ListItemIcon>
            <Email />
          </ListItemIcon>
          <Text>roadtowealth7@gmail.com</Text>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Instagram />
          </ListItemIcon>
          <a href="https://www.instagram.com/roadtowealth7/">
            <Text>roadtowealth7</Text>
          </a>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <YouTube />
          </ListItemIcon>
          <a href="https://www.youtube.com/channel/UCOEn7iKMc3ct5MRJMTM-vHQ">
            <Text>Road to Wealth</Text>
          </a>
        </ListItem>
      </List>
      <Text> Join Road to Wealth and stay tuned for more videos on financial literacy!</Text>
    </Container>
  );
};

export default About;
