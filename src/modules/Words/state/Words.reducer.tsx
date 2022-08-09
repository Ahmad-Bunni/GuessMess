import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ICharacterInput,
  ICharacterValue,
} from '../models/Words.characterInput';
import calculateCharacterStatus from './helpers/Words.character.helpers';
import { initialState } from './Words.state';

export const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    addCharacterDetails: (state, action: PayloadAction<ICharacterInput>) => {
      state.characters[action.payload.index] = {
        value: action.payload.value,
        status: calculateCharacterStatus(state, action.payload),
      } as ICharacterValue;
    },
    validateWordCompletion: (state) => {
      state.wordComplete = Object.values(state.characters).every(
        (character) => character.value
      );
    },
    setFieldsNumber: (state) => {
      state.numberOfFields = state.word.length;
    },
  },
});

const { reducer } = wordSlice;
export default reducer;
