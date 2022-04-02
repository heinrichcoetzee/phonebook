import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhonebookRoutingModule } from './phonebook-routing.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { PhonebookEntriesComponent } from './phonebook-entries/phonebook-entries.component';
import { PhonebookListComponent } from './phonebook-list/phonebook-list.component';

@NgModule({
  declarations: [PhonebookListComponent, PhonebookEntriesComponent],
  imports: [CommonModule, PhonebookRoutingModule, FontAwesomeModule, FormsModule]
})
export class PhonebookModule {}
