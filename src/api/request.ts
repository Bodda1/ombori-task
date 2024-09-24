/** *****************************************************************
* Copyright         : 2024 Abdallah Ibrahim
* File Name         : requests.ts
* Description       : This file contains the core logic of api calls using axios
*                    
* Revision History  :
* Date				Author    		Comments
* ---------------------------------------------------------------------------
* 24/09/2024		Abdallah Ibrahim		Created.
*
/***************************************************************** */

import axios, { AxiosResponse } from 'axios';

// here we define our request methods and each method uses axios directly
// but we don't access those methods directly instead we add wrappers and use
// those wrappers to add extra logic on top of the methods either authentication
// wrapper or even anonymous wrapper with global headers

const request = {
  get(headers: any, url: string, params: any) {
    const configOptions = {
      params,
      headers,
      validateStatus(status: number) {
        return status <= 500;
      },
    };

    const apiCallPromis = axios.get(url, configOptions);
    return apiCallPromis;
  },

  post(headers: any, url: string, params: any, queryParams: any) {
    const configOptions = {
      headers,
      validateStatus(status: number) {
        return status <= 500;
      },
    };

    let updatedUrl = url;
    if (queryParams) {
      const queryArr: any[] = [];
      Object.keys(queryParams).forEach(queryKey => {
        queryArr.push(`${queryKey}=${queryParams[queryKey]}`);
      });
      const queryString = queryArr.join('&');
      updatedUrl = `${url}?${queryString}`;
    }

    const apiCallPromis = axios.post(updatedUrl, params, configOptions);
    return apiCallPromis;
  },

  put(headers: any, url: string, params: any) {
    const configOptions = {
      headers,
      validateStatus(status: number) {
        return status <= 500;
      },
    };

    const apiCallPromis = axios.put(url, params, configOptions);
    return apiCallPromis;
  },

  patch(headers: any, url: string, params: any) {
    const configOptions = {
      headers,
      validateStatus(status: number) {
        return status <= 500;
      },
    };

    const apiCallPromis = axios.patch(url, params, configOptions);
    return apiCallPromis;
  },

  delete(headers: any, url: string, data: any) {
    const configOptions = {
      data,
      headers,
      validateStatus(status: number) {
        return status <= 500;
      },
    };

    const apiCallPromis = axios.delete(url, configOptions);
    return apiCallPromis;
  },
};

const wrapAnonymous: any =
  (): any =>
  // eslint-disable-next-line consistent-return
  async (
    customHeaders = {},
    replaceHeaders = false,
    ...props: any[]
  ): Promise<AxiosResponse<any, any>> => {
    let headers = {
      // we can add any global headers here
      ...customHeaders,
    };
    if (replaceHeaders) headers = customHeaders;

    const apiRequest = request.get(headers, props[0], props[1]);

    return apiRequest;
  };

export const anonymousRequests = {
  get: wrapAnonymous('get'),
};
