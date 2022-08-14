import { createFetcher, Invoker } from '@helpers';

export const getPlanes: Invoker<string[]> = createFetcher<string[]>(async (axios) => {
  const { data } = await axios.get<string[]>('api/planes');

  return data;
});
