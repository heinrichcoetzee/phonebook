import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEdit, faPlusSquare, faSpinner, faTrash } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject } from 'rxjs';
import { PhonebookList } from '../../../../../backend/interfaces/phonebook.interface';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-phonebook-list',
  templateUrl: './phonebook-list.component.html',
  styleUrls: ['./phonebook-list.component.scss']
})
export class PhonebookListComponent implements OnInit {
  faSpinner = faSpinner;
  faPlusSquare = faPlusSquare;
  faTrash = faTrash;
  faEdit = faEdit;
  $phonebookList = new BehaviorSubject<PhonebookList[] | null>(null);
  addingEntry: boolean = false;
  debounce: unknown;
  savingItem: { [key: string]: boolean } = {};
  search: string | null = null;
  constructor(private router: Router, private dataService: DataService) {}

  async ngOnInit(): Promise<void> {
    await this.dataService.getPhonebookList();
    this.$phonebookList = this.dataService.$phonebookList;
  }

  delayedSave(phonebook: PhonebookList, index: number) {
    clearTimeout(this.debounce as number);
    this.debounce = setTimeout(async () => {
      this.savingItem[index] = true;
      await this.dataService.savePhonebook(phonebook);
      this.savingItem[index] = false;
    }, 2000);
  }

  async editPhonebook(phonebook: PhonebookList, index: number) {
    this.dataService.openPhonebook(phonebook);
  }
  removePhonebook(phonebook: PhonebookList) {
    this.dataService.removePhonebook(phonebook.id || '');
  }

  async addPhonebook() {
    this.addingEntry = true;
    await this.dataService.createPhonebook();
    this.addingEntry = false;
    this.search = 'adding';
    this.search = '';
  }
}
