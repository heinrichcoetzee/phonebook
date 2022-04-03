import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faChevronLeft, faEdit, faPlus, faSave, faSpinner, faTrash } from '@fortawesome/free-solid-svg-icons';
import { PhonebookEntry, PhonebookList } from '../../../../../backend/interfaces/phonebook.interface';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-phonebook-entries',
  templateUrl: './phonebook-entries.component.html',
  styleUrls: ['./phonebook-entries.component.scss']
})
export class PhonebookEntriesComponent implements OnInit {
  phonebookList: PhonebookList | undefined;
  faSpinner = faSpinner;
  faChevronLeft = faChevronLeft;
  faSave = faSave;
  newEntry = this.defaultEntry();
  faPlus = faPlus;
  faEdit = faEdit;
  faTrash = faTrash;
  editing: number | null = null;
  saving: boolean = false;
  search: string = '';
  constructor(private router: Router, private dataService: DataService, private ar: ActivatedRoute) {}

  defaultEntry(): PhonebookEntry {
    return {
      name: '',
      phoneNumber: '',
      email: ''
    };
  }
  async ngOnInit(): Promise<void> {
    const id = this.ar.snapshot.params.id;
    if (!id) {
      this.back();
      return;
    }

    this.phonebookList = await this.dataService.getPhonebookById(id);
  }
  back() {
    this.router.navigate(['phonebook', 'list']);
  }
  async save() {
    this.saving = true;
    this.phonebookList = await this.dataService.savePhonebook(this.phonebookList as PhonebookList);
    this.saving = false;
  }

  deleteEntry(index: number) {
    this.phonebookList?.entries.splice(index, 1);
  }
  editEntry(index: number) {
    this.editing = index;
  }
  saveEntry() {
    this.editing = null;
  }
  addEntry(entry: PhonebookEntry) {
    if (!entry.name || !entry.phoneNumber) {
      return;
    }

    this.editing = null;
    this.phonebookList?.entries.push(entry);
    this.newEntry = this.defaultEntry();
  }
}
