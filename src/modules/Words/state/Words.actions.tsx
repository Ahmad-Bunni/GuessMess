import { wordSlice } from './Words.reducer';

const { actions } = wordSlice;

export const {
  setCharacterDetails,
  setFieldsNumber,
  validateWordCompletion,
  validateCharacters,
  restart,
} = actions;
