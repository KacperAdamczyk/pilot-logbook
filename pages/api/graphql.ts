import 'reflect-metadata';
import { createServer } from '@graphql-yoga/node';
import type { NextApiRequest, NextApiResponse } from 'next';

import { schema } from '../../graphql';

export default createServer<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({ schema });

export const config = {
  api: {
    bodyParser: false,
  },
};
