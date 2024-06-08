import { Component } from '@angular/core';
import { RoutesArray } from './routes/routes';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {
  public routes = RoutesArray;
}
