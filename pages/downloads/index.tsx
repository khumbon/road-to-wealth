/* eslint-disable react/no-unknown-property */
import React from 'react';
import { Container } from '@mui/material';
import { Download, Heading } from '../../components';
import { budgetDownload, financialPlannerDownload } from '../../copy/downloads';

const Downloads = () => {
  return (
    <Container sx={{ marginTop: 6 }}>
      <Heading>Downloads</Heading>
      <Download downloadInfo={budgetDownload} downloadContent="/assets/downloads/Budget.xlsx" />
      <Download downloadInfo={financialPlannerDownload} downloadContent="/assets/downloads/Financial Planner.xlsx" />
    </Container>
  );
};

export default Downloads;
