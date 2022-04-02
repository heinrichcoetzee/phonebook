import * as express from 'express';
import { Request, Response } from 'express';
import { dataAccess } from '..';

const phonebookRouter = express.Router();

phonebookRouter.get('/list', async (req: Request, res: Response) => {
  return dataAccess
    .fetchList()
    .then((data) => {
      res.statusCode = 200;
      return res.send(data);
    })
    .catch((err) => {
      res.statusCode = 400;
      return res.send(err);
    });
});

phonebookRouter.post('/create', async (req: Request, res: Response) => {
  let { phonebookList } = req.body;
  let newItem = await dataAccess.updateListItem(phonebookList);
  res.statusCode = 200;
  return res.send(newItem);
});

phonebookRouter.post('/update', async (req: Request, res: Response) => {
  let { phonebookList } = req.body;
  let newItem = await dataAccess.updateListItem(phonebookList);
  res.statusCode = 200;
  return res.send(newItem);
});

phonebookRouter.get('/listitem/:id', async (req: Request, res: Response) => {
  let { id } = req.params;
  let item = dataAccess.getPhonebookById(id);
  res.statusCode = 200;
  return res.send(item);
});

export default phonebookRouter;
