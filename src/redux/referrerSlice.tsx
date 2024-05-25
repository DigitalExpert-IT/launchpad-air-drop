// src/redux/referrerSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ReferrerState {
  referrer: string;
}

const initialState: ReferrerState = {
  referrer: '',
};

const referrerSlice = createSlice({
  name: 'referrer',
  initialState,
  reducers: {
    setReferrer: (state, action: PayloadAction<string>) => {
      state.referrer = action.payload;
    },
  },
});

export const { setReferrer } = referrerSlice.actions;
export default referrerSlice.reducer;
