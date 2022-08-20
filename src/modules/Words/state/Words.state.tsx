import { ICharacterValue } from '../models/Words.characterInput';

export interface WordState {
  characters: { [index: number]: ICharacterValue };
  numberOfFields: number;
  wordComplete: boolean;
  word: string;
  characterValidationTriggerFlag: boolean;
}

export const initialState: WordState = {
  characters: {},
  wordComplete: false,
  numberOfFields: 0,
  word: 'RUN',
  characterValidationTriggerFlag: false, // the value here does not matter as it is only used as switch to trigger an event with !value
};
