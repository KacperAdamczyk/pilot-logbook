import { createFetcher } from '@helpers';

export const getPlanes = createFetcher<string[]>(async (axios) => {
  const { data } = await axios.get<string[]>('api/planes');

  return data;
});
