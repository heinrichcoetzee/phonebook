import * as express from 'express';
import { Request, Response } from 'express';
import { Phonebook } from '../functions/phonebook';

const phonebookRouter = express.Router();
const phonebookFunctions = new Phonebook();
phonebookRouter.get('/list', async (req: Request, res: Response) => {
  return phonebookFunctions
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
  let newItem = await phonebookFunctions.updateListItem(phonebookList);
  res.statusCode = 200;
  return res.send(newItem);
});

phonebookRouter.put('/update', async (req: Request, res: Response) => {
  let { phonebookList } = req.body;
  let newItem = await phonebookFunctions.updateListItem(phonebookList);
  res.statusCode = 200;
  return res.send(newItem);
});

phonebookRouter.delete('/delete/:id', async (req: Request, res: Response) => {
  let { id } = req.params;
  let list = await phonebookFunctions.deleteListItem(id);
  res.statusCode = 200;
  return res.send(list);
});

phonebookRouter.get('/listitem/:id', async (req: Request, res: Response) => {
  let { id } = req.params;
  let item = phonebookFunctions.getPhonebookById(id);
  res.statusCode = 200;
  return res.send(item);
});

export default phonebookRouter;
