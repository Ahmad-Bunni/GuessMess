import { ICharacterValue } from '../models/Words.CharacterInput';

export interface WordState {
  words: { [index: number]: WordBlockState };
  numberOfFields: number;
  wordComplete: boolean;
  activeWordIndex: number;
  word: string;
  characterValidationTrigger: boolean;
  charactersValueResetTrigger: boolean;
}

export const initialState: WordState = {
  words: {},
  wordComplete: false,
  numberOfFields: 0,
  activeWordIndex: 0,
  charactersValueResetTrigger: false,
  characterValidationTrigger: false,
  word: '',
};

export interface WordBlockState {
  isActive: boolean;
  characters: { [index: number]: ICharacterValue };
}
