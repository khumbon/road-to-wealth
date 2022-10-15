/* eslint-disable react/no-unknown-property */
import React from 'react';
import { Card, Container, Grid } from '@mui/material';
import { Heading } from '../../components';
import ComputerOnDeskBlankBudget from '../../public/assets/computer-on-desk-blank-budget.png';

const Downloads = () => {
  return (
    <Container sx={{ marginTop: 6 }}>
      <Heading>Downloads</Heading>
      <Card style={{ padding: '30px' }}>
        <Grid container>
          <Grid item xs={5} style={{ padding: '10px' }}>
            <a href="/assets/downloads/budget.xlsx" target="_blank" download="Budget.xlsx">
              <img src={ComputerOnDeskBlankBudget.src} alt="Image of a budget" />
            </a>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default Downloads;
