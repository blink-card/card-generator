import {
  TextInput as NativeTextInput,
  TextInputProps as NativeTextInputProps,
} from 'react-native';

interface TextInputProps extends NativeTextInputProps {
  style: unknown;
  error: string;
}

const TextInput = ({ style, ...props }: TextInputProps): JSX.Element => {
  const textInputStyle = [style];
  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
