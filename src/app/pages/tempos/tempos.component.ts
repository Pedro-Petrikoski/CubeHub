import { Component } from '@angular/core';
import { TemposMock } from '../../shared/mock/tempos-mock';

@Component({
  selector: 'app-tempos',
  templateUrl: './tempos.component.html',
  styleUrl: './tempos.component.scss',
})
export class TemposComponent {
  public tempos = TemposMock;
}
