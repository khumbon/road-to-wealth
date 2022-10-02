import matter from 'gray-matter';
import React from 'react';
import PostBody from '../../components/post-body';
import path from 'path';
import { Heading } from '../../components';


// eslint-disable-next-line @typescript-eslint/no-var-requires
//const fs = require('fs');

const About = () => {
  console.log('here');
  /**const fileContents = fs.readFileSync(path.resolve(__dirname, '../../../constants/aboutMe.md'), 'utf8');
  console.log(fileContents);
  const { content } = matter(fileContents);*/
  return (
    <div>
      <Heading>About</Heading>
    </div>
  );
};

export default About;
