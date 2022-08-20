import { createListenerMiddleware } from '@reduxjs/toolkit';
import {
  restart,
  setCharacterDetails,
  setFieldsNumber,
  validateWordCompletion,
} from './Words.actions';

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: setCharacterDetails,
  effect: (_, listenerApi) => {
    listenerApi.dispatch(validateWordCompletion());
  },
});

listenerMiddleware.startListening({
  actionCreator: setFieldsNumber,
  effect: (_, listenerApi) => {
    listenerApi.dispatch(restart());
  },
});
