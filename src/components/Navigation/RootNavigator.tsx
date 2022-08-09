import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WordsMain from '../../modules/Words/screens/Words.Screen';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={WordsMain}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
