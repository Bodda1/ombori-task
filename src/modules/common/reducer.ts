// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { initialCommonState } from '../../redux/initialState';

export const commonSlice = createSlice({
  name: 'common',
  initialState: initialCommonState,
  reducers: {
    setContext: (state, { payload }) => {
      state.context = payload;
    },
  },
});

export const { setContext } = commonSlice.actions;

export default commonSlice.reducer;
