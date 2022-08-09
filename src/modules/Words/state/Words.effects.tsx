import { createListenerMiddleware } from '@reduxjs/toolkit';
import { addCharacterDetails, validateWordCompletion } from './Words.actions';

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: addCharacterDetails,
  effect: (event, listenerApi) => {
    listenerApi.dispatch(validateWordCompletion());
  },
});
