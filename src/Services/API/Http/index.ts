import {API_KEY, API_URL} from '@env';
import {HttpModel} from '@Interfaces';
import axios, {Method} from 'axios';
import {stringify} from 'query-string';

const BaseUrl = `${API_URL}`;
export const Http = {
  Request: async <A>(
    methodType: Method,
    url: string,
    params?: HttpModel.IRequestQueryPayload,
    payload?: HttpModel.IRequestPayload
  ): Promise<A> => {
    return new Promise((resolve, reject) => {
      const query = params
        ? `?${stringify({...params, api_key: API_KEY})}`
        : '';

      axios({
        method: methodType,
        url: `${BaseUrl}${url}${query}`,
        data: payload,
        headers: {
          'content-type': 'application/json',
          cache: 'no-cache'
        }
      })
        .then((response: any) => {
          return resolve(response);
        })
        .catch(e => {
          reject(e);
        });
    });
  }
};
