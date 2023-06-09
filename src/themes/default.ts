import { Platform } from 'react-native';

const DefaultTheme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    textWhite: '#f2f2f2',
    primary: '#0366d6',
    background: '#e1e4e8',
    tileBackground: '#b3cbea',
    navBackground: '#24292e',
    inputBorder: '#d3d3d3',
    error: '#cc0000',
    lighterRed: '#e60000',
    separator: '#909090',
    placeholder: '#a0a0a0',
    grayButton: '#8d8989',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    header: 24,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'sans-serif',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default DefaultTheme;
