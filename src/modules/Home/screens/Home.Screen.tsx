import { Button, Center, Flex, Text, VStack } from 'native-base';
import React from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import AppLogo from '../../../assets/icons/AppLogo';

import GameMenu from '../components/Home.GameMenu';
import { setGameMenuVisiblity } from '../state/Home.actions';

export default function Home() {
  const { height, width } = useWindowDimensions();
  const dispatch = useDispatch();

  return (
    <Flex bg="lightBlue.800" style={styles.container} safeAreaTop>
      <GameMenu />

      <Center>
        <AppLogo fill="white" height={height / 2} width={width} />
      </Center>

      <VStack flex={0.6} space={2} m={2}>
        <Button
          bg="yellow.600"
          _text={{ color: 'white' }}
          _pressed={{
            bg: 'yellow.500',
          }}
          rounded="3xl"
          onPress={() => dispatch(setGameMenuVisiblity(true))}
        >
          New Game
        </Button>

        <Button
          bg="white"
          _text={{ color: 'lightBlue.700' }}
          _pressed={{
            bg: 'blueGray.200',
          }}
          rounded="3xl"
        >
          Settings
        </Button>
      </VStack>

      <Center flex={0.1}>
        <Text color="white">© 2022 Brown. All rights reserved.</Text>
      </Center>
    </Flex>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
