import { useNavigation } from '@react-navigation/native';
import { Button, Modal, VStack } from 'native-base';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavigateAsRoot from '../../../components/Navigation/NavigateAsRoot';
import { IState } from '../../../store/store';
import { setFieldsNumber } from '../../Words/state/Words.actions';
import { setGameMenuVisiblity as setGameMenuVisibility } from '../state/Home.actions';

export default function GameMenu() {
  const minimumFieldCount = 4;

  const { isGameMenuVisible: gameMenuVisible } = useSelector(
    (state: IState) => state.home
  );
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const startNewGame = (numberOfFields: number) => {
    dispatch(setFieldsNumber(numberOfFields));

    dispatch(setGameMenuVisibility(false));
    NavigateAsRoot({ navigation, root: 'Words' });
  };

  const isEven = (index: number) => {
    return index % 2 === 0;
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
                  rounded="3xl"
                  bg={isEven(index) ? 'yellow.600' : 'lightBlue.700'}
                  _pressed={{
                    bg: isEven(index) ? 'yellow.500' : 'lightBlue.600',
                  }}
                  onPress={() => startNewGame(index + 4)}
                  key={index}
                >
                  {`Characters ${index + minimumFieldCount}`}
                </Button>
              );
            })}
          </VStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}
