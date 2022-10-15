/* eslint-disable react/no-unknown-property */
import React from 'react';
import { Button, Card, Grid, Typography, useMediaQuery } from '@mui/material';
import { Text } from '../../components';
import ComputerOnDeskBlankBudget from '../../public/assets/computer-on-desk-blank-budget.png';
import Link from 'next/link';
import { colours, screenSizes } from '../../constants';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Favorite } from '@mui/icons-material';
import { DownloadInfo } from '../../types';

const theme = createTheme({
  palette: {
    primary: {
      main: colours.brand,
    },
  },
});

interface DownloadProps {
  downloadInfo: DownloadInfo;
  downloadContent: string;
}

export const Download = ({ downloadInfo, downloadContent }: DownloadProps) => {
  const isMobile = useMediaQuery(`(max-width: ${screenSizes.smallDesktop}px)`);
  return (
    <Card style={{ padding: '30px' }}>
      <Grid container>
        <Grid item xs={5} style={{ padding: '10px' }}>
          <a href={downloadContent} download="Budget.xlsx">
            <img src={ComputerOnDeskBlankBudget.src} alt="Image of a budget" />
          </a>
        </Grid>
        <Grid item xs={7} style={{ padding: '10px' }}>
          <Typography variant="h4">
            <Link as={downloadContent} href={downloadContent}>
              <a className="hover:underline">{downloadInfo.title}</a>
            </Link>
          </Typography>
          <Typography variant="h5" style={{ paddingBottom: '40px' }}>
            {downloadInfo.subtitle}
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
        {downloadInfo.paragraphs.map((paragraph, index) => (
          <Text key={index}>{paragraph}</Text>
        ))}
      </Grid>
    </Card>
  );
};
