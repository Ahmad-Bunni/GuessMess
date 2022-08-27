import { Button, Modal, VStack } from 'native-base';

export default function MenuModal({
  setGameMenuVisible,
  startNewGame,
  goHome,
  gameMenuVisible,
}: {
  setGameMenuVisible: (visible: boolean) => void;
  startNewGame: () => void;
  goHome: () => void;
  gameMenuVisible: boolean;
}) {
  return (
    <Modal isOpen={gameMenuVisible} onClose={() => setGameMenuVisible(false)}>
      <Modal.Content>
        <Modal.Header alignItems="center">Menu</Modal.Header>
        <Modal.Body>
          <VStack space={4}>
            <Button
              rounded="3xl"
              bg="lightBlue.700"
              _text={{ color: 'white' }}
              _pressed={{
                bg: 'lightBlue.600',
              }}
              onPress={() => startNewGame()}
            >
              New Game
            </Button>

            <Button
              rounded="3xl"
              bg="yellow.600"
              _text={{ color: 'white' }}
              _pressed={{
                bg: 'yellow.500',
              }}
              onPress={() => goHome()}
            >
              Home
            </Button>
          </VStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}
