import { ICharacterValue } from '../models/Words.characterInput';

export interface WordState {
  characters: { [index: number]: ICharacterValue };
  numberOfFields: number;
  wordComplete: boolean;
  word: string;
}

export const initialState: WordState = {
  characters: {},
  wordComplete: false,
  numberOfFields: 0,
  word: 'RUN',
};
