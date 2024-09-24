import { anonymousRequests } from 'api/request';
import urls from 'configs/urls';

import { type FetchUsersListPayload } from './saga';

export const getUsers = ({ data }: FetchUsersListPayload) =>
  anonymousRequests.get(null, false, urls.usersUrls.getUsers, data);
