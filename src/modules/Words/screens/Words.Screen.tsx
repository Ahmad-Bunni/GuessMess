import { useNavigation } from '@react-navigation/native';
import {
  Button,
  Center,
  Flex,
  KeyboardAvoidingView,
  Pressable,
  VStack,
} from 'native-base';
import React from 'react';
import { Keyboard, Platform, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import NavigateAsRoot from '../../../components/Navigation/NavigateAsRoot';
import { IState } from '../../../store/store';
import BottomBar from '../components/Words.BottomBar';
import CharactersBlock from '../components/Words.CharactersBlock';
import CharactersBreakdown from '../components/Words.CharactersBreakdown';
import MenuModal from '../components/Words.Menu';
import { restart, validateCharacters } from '../state/Words.actions';

export default function WordsMain() {
  const navigation = useNavigation();
  const [gameMenuVisible, setGameMenuVisible] = React.useState(false);
  const { wordComplete } = useSelector((state: IState) => state.word);
  const disptach = useDispatch();

  const goHome = () => {
    NavigateAsRoot({ navigation, root: 'Home' });
  };

  const newGame = () => {
    setGameMenuVisible(false);
    disptach(restart());
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Flex flex={1} safeAreaTop>
        <Pressable flex={0.95} onPress={() => Keyboard.dismiss()}>
          <CharactersBreakdown flex={0.2} />

          <Center flex={0.6}>
            <VStack space={4}>
              <CharactersBlock />

              <Button
                bg="lightBlue.600"
                _pressed={{
                  bg: 'lightBlue.500',
                }}
                isDisabled={!wordComplete}
                onPress={() => disptach(validateCharacters())}
              >
                Submit
              </Button>
            </VStack>
          </Center>
        </Pressable>

        <BottomBar
          flex={0.06}
          newGame={newGame}
          setGameMenuVisible={setGameMenuVisible}
        />
      </Flex>

      <MenuModal
        startNewGame={newGame}
        goHome={goHome}
        setGameMenuVisible={setGameMenuVisible}
        gameMenuVisible={gameMenuVisible}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
