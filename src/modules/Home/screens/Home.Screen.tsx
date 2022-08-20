import { Button, KeyboardAvoidingView } from 'native-base';
import React from 'react';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import GameMenu from '../components/Home.GameMenu';
import { setGameMenuVisiblity } from '../state/Home.actions';

export default function Home() {
  const dispatch = useDispatch();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <GameMenu />

      <View style={styles.container}>
        <Button onPress={() => dispatch(setGameMenuVisiblity(true))}>
          New Game
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
