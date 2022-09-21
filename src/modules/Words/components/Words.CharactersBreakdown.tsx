import { Divider, Flex, VStack } from 'native-base';
import CharacterChip from './Words.CharacterChip';

export default function CharactersBreakdown({ flex }: { flex: number }) {
  return (
    <VStack flex={flex} space={0.5}>
      <Flex wrap="wrap" direction="row">
        <CharacterChip character="A" background="green.400" />
      </Flex>

      <Flex wrap="wrap" direction="row">
        <CharacterChip character="A" background="orange.400" />
      </Flex>

      <Flex wrap="wrap" direction="row">
        <CharacterChip character="A" background="red.400" />
      </Flex>
      <Divider />
    </VStack>
  );
}
