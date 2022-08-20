import { ICharacterValue } from '../models/Words.characterInput';

export interface WordState {
  characters: { [index: number]: ICharacterValue };
  numberOfFields: number;
  wordComplete: boolean;
  word: string;
  characterValidationTrigger: boolean;
  charactersValueResetTrigger: boolean;
}

export const initialState: WordState = {
  characters: {},
  wordComplete: false,
  numberOfFields: 0,
  charactersValueResetTrigger: false,
  characterValidationTrigger: false,
  word: '',
};
