import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../modules/Home/screens/Home.Screen';
import Words from '../../modules/Words/screens/Words.Screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Words"
        component={Words}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
