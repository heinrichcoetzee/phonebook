import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterlistPipe } from './filterlist.pipe';

@NgModule({
  declarations: [FilterlistPipe],
  imports: [CommonModule],
  exports: [FilterlistPipe]
})
export class FilterlistPipeModule {}
