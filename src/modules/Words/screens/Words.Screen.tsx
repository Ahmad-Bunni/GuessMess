import { CommonActions, useNavigation } from '@react-navigation/native';
import {
  Box,
  Button,
  Center,
  Flex,
  HamburgerIcon,
  Modal,
  Pressable,
  VStack,
} from 'native-base';
import React from 'react';
import { Dimensions, Keyboard, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../../store/store';
import CharactersBlock from '../components/Words.CharactersBlock';
import { triggerCharactersValidation } from '../state/Words.actions';

export default function WordsMain() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = React.useState(false);

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

  return (
    <Flex style={styles.container} safeAreaTop>
      <Pressable flex={1} onPress={() => Keyboard.dismiss()}>
        <Modal
          isOpen={modalVisible}
          onClose={() => setModalVisible(false)}
          size="md"
        >
          <Modal.Content>
            <Modal.Header>Actions</Modal.Header>
            <Modal.Body>
              <VStack space={4}>
                <Button size="sm">New Game</Button>
                <Button onPress={() => goHome()} size="sm">
                  Menu
                </Button>
              </VStack>
            </Modal.Body>
          </Modal.Content>
        </Modal>

        <Box style={styles.header}>
          <Pressable onPress={() => setModalVisible(true)}>
            <HamburgerIcon size="md" />
          </Pressable>
        </Box>

        <Center>
          <VStack space={4}>
            <CharactersBlock />
            <Button
              size="sm"
              isDisabled={!wordComplete}
              colorScheme="lightBlue"
              onPress={() => disptach(triggerCharactersValidation())}
            >
              Submit
            </Button>
          </VStack>
        </Center>
      </Pressable>
    </Flex>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    backgroundColor: 'white',
  },
  header: {
    flex: 0.5,
    margin: 4,
    alignItems: 'flex-start',
  },
});
