import { Button, KeyboardAvoidingView } from 'native-base';
import React from 'react';
import {
  Dimensions,
  Keyboard,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../../state/store';
import CharactersBlock from '../components/Words.CharactersBlock';
import { setFieldsNumber } from '../state/Words.actions';

export default function WordsMain() {
  const { characters, wordComplete, word } = useSelector(
    (state: IState) => state.word
  );

  const disptach = useDispatch();

  React.useEffect(() => {
    disptach(setFieldsNumber());
  }, [word]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <CharactersBlock />
          <Button
            isDisabled={!wordComplete}
            colorScheme="lightBlue"
            onPress={() => console.log(characters)}
          >
            Submit !
          </Button>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
