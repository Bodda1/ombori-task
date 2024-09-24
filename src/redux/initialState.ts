import { status } from 'constants/general';

type InitialCommonState = {
  context: string;
};

type InitialUsersState = {
  users: {
    status: string;
    override: boolean;
    details: {
      data?: [];
    };
  };
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
