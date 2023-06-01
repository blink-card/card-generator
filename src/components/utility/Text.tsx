import {
  StyleSheet,
  Text as NativeText,
  TextProps as NativeTextProps,
} from 'react-native';

import Theme from '../../themes/default';

const styles = StyleSheet.create({
  text: {
    color: Theme.colors.textPrimary,
    fontSize: Theme.fontSizes.body,
    fontFamily: Theme.fonts.main,
    // @ts-ignore: fontWeights.normal is valid value
    fontWeight: Theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: Theme.colors.textSecondary,
  },
  colorTextWhite: {
    color: Theme.colors.textWhite,
  },
  colorTextError: {
    color: Theme.colors.error,
  },
  colorPrimary: {
    color: Theme.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: Theme.fontSizes.subheading,
  },
  fontSizeHeader: {
    fontSize: Theme.fontSizes.header,
  },
  fontWeightBold: {
    // @ts-ignore: fontWeights.bold is valid value
    fontWeight: Theme.fontWeights.bold,
  },
});

interface TextProps extends NativeTextProps {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}

const Text = ({
  color,
  fontSize,
  fontWeight,
  style,
  ...props
}: TextProps): JSX.Element => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'textWhite' && styles.colorTextWhite,
    color === 'primary' && styles.colorPrimary,
    color === 'error' && styles.colorTextError,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontSize === 'header' && styles.fontSizeHeader,
    fontWeight === 'bold' && styles.fontWeightBold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
