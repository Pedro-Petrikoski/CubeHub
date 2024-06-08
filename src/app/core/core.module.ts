import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [SideNavComponent],
  imports: [CommonModule, RouterLink],
  exports: [SideNavComponent],
})
export class CoreModule {}
