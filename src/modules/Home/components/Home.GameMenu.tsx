import { CommonActions, useNavigation } from '@react-navigation/native';
import { Button, Modal, Text, VStack } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../../store/store';
import { setFieldsNumber } from '../../Words/state/Words.actions';
import { setGameMenuVisiblity as setGameMenuVisibility } from '../state/Home.actions';

export default function GameMenu() {
  const { isGameMenuVisible: gameMenuVisible } = useSelector(
    (state: IState) => state.home
  );
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const startNewGame = (numberOfFields: number) => {
    dispatch(setFieldsNumber(numberOfFields));

    dispatch(setGameMenuVisibility(false));
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Words' }],
      })
    );
  };

  return (
    <Modal
      isOpen={gameMenuVisible}
      onClose={() => dispatch(setGameMenuVisibility(false))}
    >
      <Modal.Content>
        <Modal.Header alignItems="center">Game Mode</Modal.Header>
        <Modal.Body>
          <VStack space={6}>
            {[...Array(3)].map((_, index) => {
              return (
                <Button
                  bg="blue.400"
                  _text={{ color: 'white' }}
                  _pressed={{
                    bg: 'blue.500',
                  }}
                  key={index}
                  onPress={() => startNewGame(index + 4)}
                >
                  <Text style={styles.buttonText}>Characters {index + 4}</Text>
                </Button>
              );
            })}
          </VStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
  },
});
