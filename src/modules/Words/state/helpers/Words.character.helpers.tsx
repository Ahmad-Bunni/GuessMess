import { CharacterStatus } from '../../models/Words.Character.status';
import { ICharacterInput } from '../../models/Words.CharacterInput';
import { WordState } from '../Words.state';

export default function calculateCharacterStatus(
  state: WordState,
  payload: ICharacterInput
) {
  if (
    !state.words[state.activeWordIndex].characters[payload.characterIndex] ||
    !payload.value
  )
    return CharacterStatus.Default;

  const wordArray = [...state.word];
  const correctCharacter = wordArray[payload.characterIndex];
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
