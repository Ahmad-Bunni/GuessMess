import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { extendTheme, NativeBaseProvider } from 'native-base';
import * as React from 'react';
import App from './RootNavigator';

export default function Navigation() {
  const theme = extendTheme({});

  return (
    <NavigationContainer theme={DarkTheme}>
      <NativeBaseProvider theme={theme}>
        <App />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
