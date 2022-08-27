import { Flex, VStack } from 'native-base';

export default function CharactersBreakdown({ flex }: { flex: number }) {
  return (
    <VStack flex={flex} space={0.5}>
      <Flex
        flex={0.3}
        wrap="wrap"
        direction="row"
        backgroundColor="green.500"
      ></Flex>

      <Flex
        flex={0.3}
        wrap="wrap"
        direction="row"
        backgroundColor="yellow.500"
      ></Flex>

      <Flex
        flex={0.3}
        wrap="wrap"
        direction="row"
        backgroundColor="red.500"
      ></Flex>
    </VStack>
  );
}
