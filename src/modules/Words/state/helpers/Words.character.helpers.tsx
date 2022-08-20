import { CharacterStatus } from '../../models/Words.character.status';
import { ICharacterInput } from '../../models/Words.characterInput';
import { WordState } from '../Words.state';

export default function calculateCharacterStatus(
  state: WordState,
  payload: ICharacterInput
) {
  if (!state.characters[payload.index] || !payload.value)
    return CharacterStatus.Default;

  const wordArray = [...state.word];
  const correctCharacter = wordArray[payload.index];
  const givenCharacter = payload.value;

  if (correctCharacter === givenCharacter) return CharacterStatus.Right;
  else if (wordArray.includes(givenCharacter)) return CharacterStatus.Close;
  else return CharacterStatus.Wrong;
}

export function getRandomWord(length: number) {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '')
    .toUpperCase()
    .substring(0, length);
}
