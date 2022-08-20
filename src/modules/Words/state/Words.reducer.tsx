import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ICharacterInput,
  ICharacterValue,
} from '../models/Words.characterInput';
import calculateCharacterStatus, {
  getRandomWord,
} from './helpers/Words.character.helpers';
import { initialState, WordState } from './Words.state';

export const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    setCharacterDetails: (
      state: WordState,
      action: PayloadAction<ICharacterInput>
    ) => {
      state.characters[action.payload.index] = {
        value: action.payload.value,
        status: calculateCharacterStatus(state, action.payload),
      } as ICharacterValue;
    },
    setFieldsNumber: (state: WordState, actions: PayloadAction<number>) => {
      state.numberOfFields = actions.payload;
    },
    validateWordCompletion: (state: WordState) => {
      state.wordComplete = Object.values(state.characters).every(
        (character) => character.value
      );
    },
    validateCharacters: (state: WordState) => {
      state.characterValidationTrigger = !state.characterValidationTrigger;
    },
    restart: (state: WordState) => {
      return {
        ...state,
        word: getRandomWord(state.numberOfFields),
        wordComplete: false,
        characters: initialState.characters,
        charactersValueResetTrigger: !state.charactersValueResetTrigger,
        characterValidationTrigger: !state.characterValidationTrigger,
      };
    },
  },
});

const { reducer } = wordSlice;
export default reducer;
