/* eslint-disable react/no-unknown-property */
import React from 'react';
import { Button, Card, Container, Grid, Typography } from '@mui/material';
import { Heading, Text } from '../../components';
import ComputerOnDeskBlankBudget from '../../public/assets/computer-on-desk-blank-budget.png';
import Link from 'next/link';
import { colours } from '../../constants';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Favorite } from '@mui/icons-material';

const theme = createTheme({
  palette: {
    primary: {
      main: colours.brand,
    },
  },
});

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
          <Grid item xs={7} style={{ padding: '10px' }}>
            <Typography variant="h4">
              <Link as="/assets/downloads/Budget.xlsx" href="/assets/downloads/Budget.xlsx">
                <a className="hover:underline">Annual Budget Spreadsheet</a>
              </Link>
            </Typography>
            <Typography variant="h5" style={{ paddingBottom: '40px' }}>
              Digital Financial Planner
            </Typography>
            <ThemeProvider theme={theme}>
              <Grid width="350px">
                <Button href="/assets/downloads/Budget.xlsx" variant="contained" color="primary" fullWidth>
                  Download
                </Button>
              </Grid>
              <Grid width="350px" style={{ paddingTop: '20px' }}>
                <Button variant="outlined" color="primary" endIcon={<Favorite />} fullWidth>
                  Like
                </Button>
              </Grid>
            </ThemeProvider>
          </Grid>
        </Grid>
        <Grid style={{ paddingTop: '20px' }}>
          <Text>
            Take control of your finances using this customisable Annual Budget Spreadsheet to track your monthly
            transactions.
          </Text>
          <Text>
            This spreadsheet was designed to be a simple one-pager built for people who are just beginning their
            financial journey and road to wealth. The front page is an easy to understand overview of where your money
            is going. The budget also comes with pre-filled categories to give you an idea of what you might want to
            include.
          </Text>
          <Text>
            For those who are new to excel, I have attached clear step by step instructions on how to put your numbers
            into this workbook.
          </Text>
          <Text>
            Knowing where your money going is the first step to achieving your financial goals. I have been using this
            spreadsheet for years and it has been the greatest tool to rid me of financial anxieties and replace them
            with control and confidence.
          </Text>
        </Grid>
      </Card>
    </Container>
  );
};

export default Downloads;
