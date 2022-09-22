import React, { createRef, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { IState } from '../../../store/store';
import { InputEvent } from '../models/Worlds.InputEvent';
import CharacterItem from './Words.CharacterItem';

export default function CharactersBlock({
  wordBlockIndex,
}: {
  wordBlockIndex: number;
}) {
  const { numberOfFields } = useSelector((state: IState) => state.word);

  const fieldsRef = useRef<any>(
    [...Array(numberOfFields)].map(() => createRef())
  );

  React.useEffect(() => {
    fieldsRef.current[0]?.focus() as any;
  }, [numberOfFields]);

  const handleChange = (index: any, eventType: InputEvent) => {
    if (eventType === InputEvent.Add && fieldsRef.current[index + 1]) {
      fieldsRef.current[index + 1].focus();
    }

    if (
      eventType === InputEvent.Add &&
      index + 1 === Object.keys(fieldsRef.current).length
    ) {
      fieldsRef.current[index].blur();
    }

    if (eventType === InputEvent.Remove && fieldsRef.current[index - 1]) {
      fieldsRef.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      {[...Array(numberOfFields)].map((_, index) => {
        return (
          <CharacterItem
            key={index}
            wordBlockIndex={wordBlockIndex}
            characterIndex={index}
            reference={(el: any) => (fieldsRef.current[index] = el)}
            handleChange={handleChange}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
