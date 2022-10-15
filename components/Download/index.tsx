/* eslint-disable react/no-unknown-property */
import React from 'react';
import {
  Button,
  Card,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { Text } from '../../components';
import ComputerOnDeskBlankBudget from '../../public/assets/computer-on-desk-blank-budget.png';
import Link from 'next/link';
import { colours, screenSizes } from '../../constants';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Check, Favorite } from '@mui/icons-material';
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
    <Card style={{ padding: '30px', marginBottom: '40px' }}>
      <Grid container>
        <Grid item xs={isMobile ? 12 : 5} style={{ padding: '10px' }}>
          <a href={downloadContent} download={downloadInfo.type + 'xlsx'}>
            <img src={ComputerOnDeskBlankBudget.src} alt="Image of a budget" />
          </a>
        </Grid>
        <Grid item xs={isMobile ? 12 : 7} style={{ padding: '10px' }}>
          <Typography variant="h4">
            <Link as={downloadContent} href={downloadContent}>
              <a className="hover:underline">{downloadInfo.title}</a>
            </Link>
          </Typography>
          <Typography variant="h5" style={{ paddingBottom: '40px' }}>
            {downloadInfo.subtitle}
          </Typography>
          <ThemeProvider theme={theme}>
            <Grid width={isMobile ? '300px' : '350px'}>
              <Button href={downloadContent} variant="contained" color="primary" fullWidth>
                Download
              </Button>
            </Grid>
            <Grid width={isMobile ? '300px' : '350px'} style={{ paddingTop: '20px' }}>
              <Button variant="outlined" color="primary" endIcon={<Favorite />} fullWidth>
                Like
              </Button>
            </Grid>
          </ThemeProvider>
        </Grid>
      </Grid>
      <Grid style={{ paddingTop: '20px' }}>
        {downloadInfo.paragraphs.map((paragraph, index) => {
          if (typeof paragraph === 'string') {
            return <Text key={index}>{paragraph}</Text>;
          } else if (Array.isArray(paragraph)) {
            return (
              <List key={index}>
                {paragraph.map((listItem, index) => (
                  <ListItem key={index} style={{ padding: '0px 16px 0px 30px' }}>
                    <ListItemIcon>
                      <Check />
                    </ListItemIcon>
                    <ListItemText>{listItem}</ListItemText>
                  </ListItem>
                ))}
              </List>
            );
          }
        })}
      </Grid>
    </Card>
  );
};
