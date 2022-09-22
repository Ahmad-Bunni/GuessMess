import { CharacterStatus } from './Words.Character.status';

export interface ICharacterValue {
  value: string;
  status: CharacterStatus;
}

export interface ICharacterInput extends ICharacterValue {
  characterIndex: number;
  wordBlockIndex: number;
}
