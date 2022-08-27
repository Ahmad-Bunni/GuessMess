import { Ionicons } from '@expo/vector-icons';
import {
  Flex,
  HamburgerIcon,
  MoonIcon,
  QuestionOutlineIcon,
} from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default function BottomBar({
  flex,
  setGameMenuVisible,
  newGame,
}: {
  flex: number;
  setGameMenuVisible: (visible: boolean) => void;
  newGame: () => void;
}) {
  return (
    <Flex flex={flex} direction="row" bg="lightBlue.700">
      <TouchableOpacity
        style={styles.barButton}
        onPress={() => setGameMenuVisible(true)}
      >
        <HamburgerIcon style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.barButton}>
        <MoonIcon style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.barButton}>
        <QuestionOutlineIcon style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.barButton}>
        <Ionicons name="reload" style={styles.icon} onPress={() => newGame()} />
      </TouchableOpacity>
    </Flex>
  );
}

const styles = StyleSheet.create({
  barButton: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
  },
  icon: {
    color: 'white',
    height: 24, //native base icons
    width: 24, // native base icons
    fontSize: 24, // expo icons
  },
});
