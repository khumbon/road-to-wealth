/* eslint-disable react/no-unknown-property */
import React from 'react';
import {
  Button,
  Card,
  createTheme,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { Text } from '../../components';
import ComputerOnDeskBlankBudget from '../../public/assets/computer-on-desk-blank-budget.png';
import Link from 'next/link';
import { screenSizes } from '../../constants';
import Check from '@mui/icons-material/Check';
import Favorite from '@mui/icons-material/Favorite';
import { DownloadInfo } from '../../types';
import { colours } from '../../constants/colours';

interface DownloadProps {
  downloadInfo: DownloadInfo;
  isPreview?: boolean;
}

export const Download = ({ downloadInfo, isPreview }: DownloadProps) => {
  const isMobile = useMediaQuery(`(max-width: ${screenSizes.smallDesktop}px)`);
  const reducedWith = isMobile || isPreview;

  const theme = createTheme({
    palette: {
      primary: {
        main: colours.brand,
      },
    },
  });
  return (
    <Card style={{ padding: '30px', marginBottom: '40px' }}>
      <Grid container>
        <Grid item xs={reducedWith ? 12 : 5} style={{ padding: '10px' }}>
          <a href={downloadInfo.contentLocation} download={downloadInfo.type + 'xlsx'}>
            <img src={ComputerOnDeskBlankBudget.src} alt="Image of a budget" />
          </a>
        </Grid>
        <Grid item xs={reducedWith ? 12 : 7} style={{ padding: '10px' }}>
          <Typography variant="h4">
            <Link as={downloadInfo.contentLocation} href={downloadInfo.contentLocation} className="hover:underline">
              {downloadInfo.title}
            </Link>
          </Typography>
          <Typography variant="h5" style={{ paddingBottom: '40px' }}>
            {downloadInfo.subtitle}
          </Typography>
          <ThemeProvider theme={theme}>
            <Grid
              xs={12}
              sm={12}
              md={isPreview ? 12 : 10}
              lg={isPreview ? 12 : 7}
              style={{ paddingTop: isPreview && downloadInfo.type === 'Budget' ? '40px' : '0px' }}
            >
              <Button href={downloadInfo.contentLocation} variant="contained" color="primary" fullWidth>
                Download
              </Button>
            </Grid>
            <Grid xs={12} sm={12} md={isPreview ? 12 : 10} lg={isPreview ? 12 : 7} style={{ paddingTop: '20px' }}>
              <Button variant="outlined" color="primary" endIcon={<Favorite />} fullWidth>
                Like
              </Button>
            </Grid>
          </ThemeProvider>
        </Grid>
      </Grid>
      <Grid style={{ paddingTop: '20px' }}>
        {!isPreview
          ? downloadInfo.paragraphs.map((paragraph, index) => {
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
            })
          : null}
      </Grid>
    </Card>
  );
};
