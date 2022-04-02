import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { PhonebookList } from '../../../backend/interfaces/phonebook.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  $phonebookList = new BehaviorSubject<PhonebookList[] | null>(null);
  openedBook: PhonebookList | undefined;
  constructor(private http: HttpClient, private router: Router) {}

  async getPhonebookList(hardReload?: boolean): Promise<PhonebookList[]> {
    if ((this.$phonebookList && this.$phonebookList.getValue()) || hardReload) {
      const phonebooklist = this.$phonebookList.getValue();
      return Promise.resolve(phonebooklist as PhonebookList[]);
    }

    return this.http
      .get<PhonebookList[]>(environment.api_url + '/phonebook/list')
      .toPromise()
      .then((phonebook) => {
        this.setPhoneBookList(phonebook);
        return phonebook;
      });
  }

  setPhoneBookList(list: PhonebookList[]): void {
    this.$phonebookList.next(list);
  }

  async createPhonebook(): Promise<PhonebookList> {
    const phonebookList: PhonebookList = {
      entries: [],
      name: ''
    };

    return this.http
      .post<PhonebookList>(environment.api_url + '/phonebook/create', { phonebookList })
      .toPromise()
      .then((newPhonebook) => {
        const list = this.$phonebookList.getValue() || [];
        list.push(newPhonebook);
        this.setPhoneBookList(list);
        return newPhonebook;
      });
  }

  openPhonebook(entry: PhonebookList) {
    this.openedBook = entry;
    this.router.navigate(['phonebook', 'entry', entry.id]);
  }

  removePhonebook(id: string): Promise<PhonebookList[]> {
    return this.http
      .delete<PhonebookList[]>(environment.api_url + '/phonebook/delete/' + id)
      .toPromise()
      .then((newList) => {
        this.setPhoneBookList(newList);
        return newList;
      });
  }

  async getPhonebookById(id: string): Promise<PhonebookList> {
    if (this.openedBook && this.openedBook.id === id) {
      return Promise.resolve(this.openedBook);
    }

    return this.http.get<PhonebookList>(environment.api_url + '/phonebook/listitem/' + id).toPromise();
  }

  async savePhonebook(phonebookList: PhonebookList): Promise<PhonebookList> {
    return this.http
      .put<PhonebookList>(environment.api_url + '/phonebook/update', { phonebookList })
      .toPromise()
      .then((newPhonebook) => {
        const list = this.$phonebookList.getValue() || [];
        let findIndex = list.findIndex((i) => i.id === newPhonebook.id);
        if (findIndex > -1) {
          list[findIndex] = newPhonebook;
        } else {
          list.push(newPhonebook);
        }
        this.setPhoneBookList(list);
        return newPhonebook;
      });
  }
}
