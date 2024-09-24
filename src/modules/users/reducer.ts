// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { status } from 'constants/general';

import { initialUsersState } from '../../redux/initialState';

export const usersSlice = createSlice({
  name: 'users',
  initialState: initialUsersState,
  reducers: {
    fetchUsersList: (state, { payload }) => {
      state.users = {
        status: status.FETCHING,
        override: payload.override,
        details: payload.override ? {} : state.users.details,
      };
    },
    fetchUsersListSuccess: (state, { payload }) => {
      // const currentData = state.users.details.data;
      // let updatedData = [];
      // if (payload.override) updatedData = payload.data;
      // else if (currentData) updatedData = [...currentData, payload.data];

      // state.users = {
      //   status: status.SUCCESS,
      //   override: payload.override,
      //   details: {
      //     ...payload,
      //     data: updatedData,
      //   },
      // };

      state.users = {
        status: status.SUCCESS,
        override: payload.override,
        details: {
          ...payload,
          data: payload.override ? payload.data : [...state.users.details.data, ...payload.data],
        },
      };
    },
    fetchUsersListFail: (state, { payload }) => {
      state.users = {
        status: status.FAIL,
        override: payload.override,
        details: payload.override ? {} : state.users.details,
      };
    },
  },
});

export const { fetchUsersList, fetchUsersListSuccess, fetchUsersListFail } = usersSlice.actions;

export default usersSlice.reducer;
