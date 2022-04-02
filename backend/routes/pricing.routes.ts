import * as express from 'express';
import { Request, Response } from 'express';
import { Pricing } from '../functions/pricing';

const pricingRouter = express.Router();

pricingRouter.get('/table', (req: Request, res: Response) => {
  const data = new Pricing().getData();
  res.statusCode = 200;
  return res.send(data);
});

export default pricingRouter;
