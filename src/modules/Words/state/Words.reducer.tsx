import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ICharacterInput,
  ICharacterValue,
} from '../models/Words.CharacterInput';
import calculateCharacterStatus, {
  getRandomWord,
} from './helpers/Words.character.helpers';
import { initialState, WordState } from './Words.state';

export const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    initializeWordBlock: (state: WordState, action: PayloadAction<number>) => {
      if (action.payload > 0) {
        state.words[action.payload - 1].isActive = false;
      }
      (state.activeWordIndex = action.payload),
        (state.words[action.payload] = {
          isActive: true,
          characters: {},
        });
    },
    setCharacterDetails: (
      state: WordState,
      action: PayloadAction<ICharacterInput>
    ) => {
      state.words[action.payload.wordBlockIndex].characters[
        action.payload.characterIndex
      ] = {
        value: action.payload.value,
        status: calculateCharacterStatus(state, action.payload),
      } as ICharacterValue;
    },
    setFieldsNumber: (state: WordState, actions: PayloadAction<number>) => {
      state.numberOfFields = actions.payload;
    },
    validateWordCompletion: (state: WordState) => {
      state.wordComplete = Object.values(
        state.words[state.activeWordIndex].characters
      ).every((character) => character.value);
    },
    validateCharacters: (state: WordState) => {
      state.characterValidationTrigger = !state.characterValidationTrigger;
    },
    restart: (state: WordState) => {
      return {
        ...state,
        word: getRandomWord(state.numberOfFields),
        wordComplete: false,
        words: initialState.words,
        charactersValueResetTrigger: !state.charactersValueResetTrigger,
        characterValidationTrigger: !state.characterValidationTrigger,
      };
    },
  },
});

const { reducer } = wordSlice;
export default reducer;
