import { Box, Center, Text } from 'native-base';

export default function CharacterChip({
  character,
  background,
}: {
  character: string;
  background: string;
}) {
  return (
    <Box w="8" rounded={10} m={0.5} bg={background}>
      <Center>
        <Text fontSize="sm" color="white">
          {character}
        </Text>
      </Center>
    </Box>
  );
}
