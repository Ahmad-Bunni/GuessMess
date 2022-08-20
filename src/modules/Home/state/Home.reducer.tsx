import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './Home.state';

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setGameMenuVisiblity: (state, action: PayloadAction<boolean>) => {
      state.isGameMenuVisible = action.payload;
    },
  },
});

const { reducer } = homeSlice;
export default reducer;
