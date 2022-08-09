import { wordSlice } from './Words.reducer';

const { actions } = wordSlice;

export const { addCharacterDetails, setFieldsNumber, validateWordCompletion } =
  actions;
