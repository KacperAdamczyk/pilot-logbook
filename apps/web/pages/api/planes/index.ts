import { createRouter } from 'next-connect';
import type { NextApiRequest, NextApiResponse } from 'next';

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get((req, res) => {
  res.json(['hello']);
});

export default router.handler();
