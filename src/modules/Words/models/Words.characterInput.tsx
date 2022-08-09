import { CharacterStatus } from './Words.character.status';

export interface ICharacterValue {
  value: string;
  status: CharacterStatus;
}

export interface ICharacterInput extends ICharacterValue {
  index: number;
}
