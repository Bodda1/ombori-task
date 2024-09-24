import { fetchUsersList } from './reducer';

export type FetchUsersListPayload = {
  data: {
    page: string;
  };
  override: boolean;
  callbackAction(shouldReload?: boolean): any;
};

export type FetchUsersListActions = {
  type: typeof fetchUsersList.type;
  payload: FetchUsersListPayload;
};
