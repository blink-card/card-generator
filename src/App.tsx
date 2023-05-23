import React from 'react';
import Main from './Main';
import { NativeRouter } from 'react-router-native';

const App = (): JSX.Element => (
  <>
    <NativeRouter>
      <Main />
    </NativeRouter>
  </>
);

export default App;
