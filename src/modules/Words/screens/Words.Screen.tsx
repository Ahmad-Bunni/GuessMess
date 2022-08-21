import { CommonActions, useNavigation } from '@react-navigation/native';
import {
  Button,
  Center,
  Flex,
  HamburgerIcon,
  KeyboardAvoidingView,
  Modal,
  MoonIcon,
  Pressable,
  QuestionIcon,
  VStack,
} from 'native-base';
import React from 'react';
import { Keyboard, Platform, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../../store/store';
import CharactersBlock from '../components/Words.CharactersBlock';
import { restart, validateCharacters } from '../state/Words.actions';

export default function WordsMain() {
  const navigation = useNavigation();
  const [gameMenuVisible, setGameMenuVisible] = React.useState(false);
  const { wordComplete } = useSelector((state: IState) => state.word);
  const disptach = useDispatch();

  const goHome = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      })
    );
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
        <Pressable flex={1} onPress={() => Keyboard.dismiss()}>
          <Modal
            isOpen={gameMenuVisible}
            onClose={() => setGameMenuVisible(false)}
          >
            <Modal.Content>
              <Modal.Header alignItems="center">Menu</Modal.Header>
              <Modal.Body>
                <VStack space={4}>
                  <Button
                    bg="blue.400"
                    _text={{ color: 'white' }}
                    _pressed={{
                      bg: 'blue.500',
                    }}
                    onPress={() => newGame()}
                  >
                    New Game
                  </Button>
                  <Button
                    bg="blue.400"
                    _text={{ color: 'white' }}
                    _pressed={{
                      bg: 'blue.500',
                    }}
                    onPress={() => goHome()}
                  >
                    Home
                  </Button>
                </VStack>
              </Modal.Body>
            </Modal.Content>
          </Modal>

          <Center flex={1}>
            <VStack space={4}>
              <CharactersBlock />
              <Button
                bg="blue.400"
                _text={{ color: 'white' }}
                _pressed={{
                  bg: 'blue.500',
                }}
                isDisabled={!wordComplete}
                onPress={() => disptach(validateCharacters())}
              >
                Submit
              </Button>
            </VStack>
          </Center>
        </Pressable>

        <Flex
          bg="blue.400"
          flex={0.06}
          direction="row"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <TouchableOpacity onPress={() => setGameMenuVisible(true)}>
            <HamburgerIcon m={1} color="white" size="lg" />
          </TouchableOpacity>

          <TouchableOpacity>
            <MoonIcon m={1} color="white" size="lg" />
          </TouchableOpacity>

          <TouchableOpacity>
            <QuestionIcon m={1} color="white" size="lg" />
          </TouchableOpacity>
        </Flex>
      </Flex>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
