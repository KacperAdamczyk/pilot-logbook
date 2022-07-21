import axios, { AxiosInstance } from 'axios';
import { IncomingMessage } from 'http';

interface FetchCallback<Params extends never[], Response> {
  (axios: AxiosInstance, ...params: Params): Promise<Response>;
}

interface Invoker<Params extends never[], Response> {
  (...params: Params): Promise<Response>;
  server(req: IncomingMessage, ...params: Params): Promise<Response>;
}

const createFetcher = <Response = never, Params extends never[] = []>(
  fetchCallback: FetchCallback<Params, Response>,
): Invoker<Params, Response> => {
  const clientInvoker = (...params: Params) => fetchCallback(axios, ...params);

  clientInvoker.server = (
    req: IncomingMessage,
    ...params: Params
  ): Promise<Response> => {
    const serverAxiosInstance = axios.create({
      baseURL: `https://${process.env.VERCEL_URL}` ?? process.env.NEXTAUTH_URL,
      headers: {
        Cookie: req.headers.cookie ?? '',
      },
    });

    return fetchCallback(serverAxiosInstance, ...params);
  };

  return clientInvoker;
};

export { createFetcher };
