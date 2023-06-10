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
  fontStyleItalic: {
    fontStyle: 'italic',
  },
});

interface TextProps extends NativeTextProps {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  fontStyle?: string;
}

/**
 * Custom text component for displaying styled text.
 *
 * @component
 *
 * @param {object} props - The props object.
 * @param {string} [props.color] - The color of the text. Possible values: 'textSecondary', 'textWhite', 'primary', 'error'.
 * @param {string} [props.fontSize] - The font size of the text. Possible values: 'subheading', 'header'.
 * @param {string} [props.fontWeight] - The font weight of the text. Possible values: 'bold'.
 * @param {string} [props.fontStyle] - The font style of the text. Possible values: 'italic'.
 * @param {object} [props.style] - Additional style object to apply to the text.
 *
 * @returns {JSX.Element} The rendered Text component.
 */
const Text = ({
  color,
  fontSize,
  fontWeight,
  fontStyle,
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
    fontStyle === 'italic' && styles.fontStyleItalic,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

interface BoldedOrItalicTextProps {
  children: string;
}

/**
 * Renders bolded text.
 * Use only inside nested <Text /> components.
 * Never use standalone for code clarity.
 */
export const B = (props: BoldedOrItalicTextProps): JSX.Element => (
  <Text fontWeight="bold">{props.children}</Text>
);

/**
 * Renders italic text.
 * Use only inside nested <Text /> components.
 * Never use standalone for code clarity.
 */
export const I = (props: BoldedOrItalicTextProps): JSX.Element => (
  <Text fontStyle="italic">{props.children}</Text>
);

export default Text;
