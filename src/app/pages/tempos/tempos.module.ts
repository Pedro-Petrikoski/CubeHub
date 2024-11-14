import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemposComponent } from './tempos.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [TemposComponent],
  imports: [CommonModule, TableModule],
  exports: [TemposComponent],
})
export class TemposModule {}
