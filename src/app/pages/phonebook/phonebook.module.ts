import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhonebookRoutingModule } from './phonebook-routing.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { PhonebookEntriesComponent } from './phonebook-entries/phonebook-entries.component';
import { PhonebookListComponent } from './phonebook-list/phonebook-list.component';
import { FilterlistPipeModule } from '../../pipes/filterlist-pipe/filterlist-pipe.module';

@NgModule({
  declarations: [PhonebookListComponent, PhonebookEntriesComponent],
  imports: [CommonModule, PhonebookRoutingModule, FontAwesomeModule, FormsModule, FilterlistPipeModule]
})
export class PhonebookModule {}
