import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';

import { createServer } from 'http';
import phonebookRouter from './routes/phonebook.routes';
import { DataAccess } from './dataAccess/dataAccess';

const app = express();
const port = process.env.PORT || 1337;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

export const dataAccess = new DataAccess();
dataAccess.connect();

app.get('/health', (req, res) => {
  res.statusCode = 200;
  return res.send('Healthy Server');
});

app.use('/phonebook', phonebookRouter);

var server = createServer(app);
server.listen(port, () => {
  console.log(`Server Started On Port ${port}...`);
});
