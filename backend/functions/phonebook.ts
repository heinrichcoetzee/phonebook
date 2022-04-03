import { dataAccess } from '..';
import { PhonebookList } from '../interfaces/phonebook.interface';

export class Phonebook {
  list: PhonebookList[] = [];
  fetchList(): Promise<PhonebookList[]> {
    return new Promise((resolve) => {
      //simulate DB connection
      setTimeout(() => {
        resolve(this.list);
      }, 1500);
    });
  }

  newListItem(list: PhonebookList): Promise<PhonebookList> {
    const id = { id: dataAccess.generateRandom() };
    const newItem = { ...id, ...list };
    this.list.push(newItem);
    return Promise.resolve(newItem);
  }

  deleteListItem(id: string): Promise<PhonebookList[]> {
    const findIndex = this.list.findIndex((i) => i.id === id);
    if (findIndex > -1) {
      this.list.splice(findIndex, 1);
    }

    return Promise.resolve(this.list);
  }

  updateListItem(updatedItem: PhonebookList): Promise<PhonebookList> {
    if (!updatedItem.id) {
      return this.newListItem(updatedItem);
    }
    const findIndex = this.list.findIndex((i) => i.id === updatedItem.id);
    if (findIndex > -1) {
      this.list[findIndex] = updatedItem;
    }

    return Promise.resolve(updatedItem);
  }

  getPhonebookById(id: string): PhonebookList | undefined {
    return this.list.find((l) => l.id === id);
  }
}
