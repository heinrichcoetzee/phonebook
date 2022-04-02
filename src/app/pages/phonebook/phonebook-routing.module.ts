import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhonebookEntriesComponent } from './phonebook-entries/phonebook-entries.component';
import { PhonebookListComponent } from './phonebook-list/phonebook-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: PhonebookListComponent },
  { path: 'entry/:id', component: PhonebookEntriesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhonebookRoutingModule {}
