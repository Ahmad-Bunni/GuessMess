import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../../state/store';
import { CharacterStatus } from '../models/Words.character.status';
import { InputEvent } from '../models/Worlds.InputEvent';
import { addCharacterDetails } from '../state/Words.actions';

export default function CharacterItem({
  handleChange,
  reference,
  index,
}: {
  handleChange: (index: any, eventType: InputEvent) => void;
  reference: any;
  index: number;
}) {
  const [value, setValue] = useState('');
  const [status, setStatus] = useState(CharacterStatus.Default);
  const { numberOfFields, characters, characterValidationTriggerFlag } =
    useSelector((state: IState) => state.word);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setValue('');
  }, [numberOfFields]);

  React.useEffect(() => {
    setStatus(characters[index]?.status);
  }, [characterValidationTriggerFlag]);

  React.useEffect(() => {
    dispatch(
      addCharacterDetails({
        index: index,
        value: value,
        status: CharacterStatus.Default,
      })
    );
  }, [value]);

  const handleOnTextChange = (text: string, key: string) => {
    if (text) {
      setValue(text.toUpperCase());
      handleChange(index, InputEvent.Add);
    } else if (!key) {
      setValue('');
      handleChange(index, InputEvent.Remove);
    } else if (!value && key === 'Backspace') {
      handleChange(index, InputEvent.Remove);
    }
  };

  const renderStyle = () => {
    switch (status) {
      case CharacterStatus.Right:
        return styles.correct;
      case CharacterStatus.Close:
        return styles.close;
      case CharacterStatus.Wrong:
        return styles.wrong;
      case CharacterStatus.Default:
        return styles.default;
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        ref={reference}
        style={[styles.input, renderStyle()]}
        selectTextOnFocus={true}
        maxLength={1}
        autoCapitalize="characters"
        onKeyPress={(event) => {
          handleOnTextChange('', event.nativeEvent.key);
        }}
        onChangeText={(text) => handleOnTextChange(text, '')}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 4,
  },
  correct: {
    borderColor: 'green',
  },
  wrong: {
    borderColor: 'red',
  },
  close: {
    borderColor: 'gold',
  },
  default: {
    borderColor: 'gray',
  },
  input: {
    borderWidth: 1.5,
    fontSize: 20,
    width: 40,
    height: 40,
    margin: 1,
    color: 'gray',
    textAlign: 'center',
  },
});
