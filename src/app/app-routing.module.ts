import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhonebookComponent } from './pages/phonebook/phonebook.component';

const routes: Routes = [
  { path: '', redirectTo: 'phonebook', pathMatch: 'full' },
  {
    path: 'phonebook',
    component: PhonebookComponent,
    loadChildren: () => import('./pages/phonebook/phonebook.module').then((m) => m.PhonebookModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
