import { wordSlice } from './Words.reducer';

const { actions } = wordSlice;

export const {
  initializeWordBlock,
  setCharacterDetails,
  setFieldsNumber,
  validateWordCompletion,
  validateCharacters,
  restart,
} = actions;
