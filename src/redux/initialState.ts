/** *****************************************************************
* Copyright         : 2024 Abdallah Ibrahim
* File Name         : initialState.ts
* Description       : this file contains the initial state of the store
*                    
* Revision History  :
* Date				Author    		Comments
* ---------------------------------------------------------------------------
* 24/09/2024		Abdallah Ibrahim		Created.
*
/***************************************************************** */

import { status } from 'constants/general';

type InitialCommonState = {
  context: string;
};

type InitialUsersState = {
  users: {
    status: string;
    override: boolean;
    details: {
      total_pages?: number;
      data?: any;
    };
  };
};

export type State = {
  common: InitialCommonState;
  users: InitialUsersState;
};

export const initialCommonState: InitialCommonState = {
  context: '',
};

export const initialUsersState: InitialUsersState = {
  users: {
    status: status.SHOULD_CALL_API,
    override: true,
    details: {},
  },
};
