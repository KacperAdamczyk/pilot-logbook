import axios, { AxiosInstance } from 'axios';
import { IncomingMessage } from 'http';

interface FetchCallback<Response, Params extends never[]> {
  (axios: AxiosInstance, ...params: Params): Promise<Response>;
}

export interface Invoker<Response, Params extends never[] = []> {
  (...params: Params): Promise<Response>;
  server(req: IncomingMessage, ...params: Params): Promise<Response>;
}

const createFetcher = <Response = never, Params extends never[] = []>(
  fetchCallback: FetchCallback<Response, Params>,
): Invoker<Response, Params> => {
  const clientInvoker = (...params: Params) => fetchCallback(axios, ...params);

  clientInvoker.server = (
    req: IncomingMessage,
    ...params: Params
  ): Promise<Response> => {
    const serverAxiosInstance = axios.create({
      baseURL: process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : process.env.NEXTAUTH_URL,
      headers: {
        Cookie: req.headers.cookie ?? '',
      },
    });

    return fetchCallback(serverAxiosInstance, ...params);
  };

  return clientInvoker;
};

export { createFetcher };
