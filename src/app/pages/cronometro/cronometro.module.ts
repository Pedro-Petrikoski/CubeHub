import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CronometroComponent } from './cronometro.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CronometroComponent],
  imports: [CommonModule, DropdownModule, FormsModule],
  exports: [CronometroComponent],
})
export class CronometroModule {}
