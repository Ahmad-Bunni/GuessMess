import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import Navigation from './components/Navigation/Navigation';
import { store } from './state/store';

export default function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <Navigation />
        <StatusBar />
      </Provider>
    </NativeBaseProvider>
  );
}
