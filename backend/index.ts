import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';

import { createServer } from 'http';
import pricingRouter from './routes/pricing.routes';

const app = express();
const port = process.env.PORT || 1337;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get('/health', (req, res) => {
  res.statusCode = 200;
  return res.send('Healthy Server');
});

app.use('/pricing', pricingRouter);

var server = createServer(app);
server.listen(port, () => {
  console.log(`Server Started On Port ${port}...`);
});
