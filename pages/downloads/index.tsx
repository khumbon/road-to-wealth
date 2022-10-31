/* eslint-disable react/no-unknown-property */
import React from 'react';
import { Container } from '@mui/material';
import { Download, Heading } from '../../components';
import { downloads } from '../../copy/downloads';

const Downloads = () => {
  return (
    <Container sx={{ marginTop: 6 }}>
      <>
        <Heading>Downloads</Heading>
        {downloads.map((downloadInfo) => (
          <Download downloadInfo={downloadInfo} key={downloadInfo.type} />
        ))}
      </>
    </Container>
  );
};

export default Downloads;
