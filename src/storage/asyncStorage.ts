import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

// FYI: Android asyncStorage is limited to 6MB.
// Modify "android/gradle.properties"
// Add line "AsyncStorage_db_size_in_MB=10" or any other value

const STORAGE_KEY_PREFIX = 'blink-card/card-generator';
const buildKey = (key: string): string => `@${STORAGE_KEY_PREFIX}-${key}`;

const raiseErrorAlert = (error: unknown, action: string): void => {
  Alert.alert('Error', `Failed to ${action} data. Sorry!`, [
    {
      text: 'OK',
      onPress: (): void => console.log(JSON.stringify(error, null, 2)),
      style: 'cancel',
    },
  ]);
};

export const storeData = async (key: string, value: unknown): Promise<void> => {
  try {
    switch (typeof value) {
      case 'number': {
        value = value.toString();
        break;
      }
      case 'object': {
        value = JSON.stringify(value);
        break;
      }
      case 'string': {
        break;
      }
      default: {
        throw new Error();
      }
    }
    await AsyncStorage.setItem(buildKey(key), value as string);
  } catch (error) {
    raiseErrorAlert(error, 'save');
  }
};

export const getData = async (key: string): Promise<string> => {
  try {
    const value = await AsyncStorage.getItem(buildKey(key));
    console.log('get here ' + value);
    if (value !== null) return value;
    throw new Error();
  } catch (error) {
    raiseErrorAlert(error, 'retrieve');
  }
};
