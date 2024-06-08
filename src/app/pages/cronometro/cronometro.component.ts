import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { categoriasArray } from './array-categorias/array-categorias';
import { CategoriasInterface } from './array-categorias/array-categorias.interface';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrl: './cronometro.component.scss',
})
export class CronometroComponent implements OnInit, OnDestroy {
  //Embaralhamento
  public categorias = categoriasArray;
  public nomeCategoria: string = '';
  public embaralhamento: string = '';
  public movimentoAnterior: string = '';
  public isMegaminx: boolean = false;

  //Cronômetro
  time: number = 0;
  intervalId: any;
  running: boolean = false;

  ngOnInit(): void {}

  //Pega a categoria assim que for selecionada no select
  onSelect(event: any) {
    if (event.target.value === 'Escolha a categoria') {
      this.nomeCategoria = '';
      this.embaralhamento = '';
      this.movimentoAnterior = '';
      return;
    }
    this.nomeCategoria = event.target.value;
    if (this.nomeCategoria === 'Megaminx') {
      this.isMegaminx = true;
    } else {
      this.isMegaminx = false;
    }
    this.embaralhar(this.nomeCategoria);
    this.time = 0;
  }

  embaralhar(nomeCategoria: string) {
    this.embaralhamento = '';
    this.movimentoAnterior = '';

    //Pega a categoria selecionada no select
    const categoria = this.categorias.find(
      (el) => el.nomeCategoria === nomeCategoria
    )!;

    //Loop para montar o embaralhamento
    for (var i = 0; i < categoria?.qtdMovimentos; i++) {
      const movimento = this.movimentoAleatorio(categoria);
      if (this.movimentoAnterior.slice(0, 1) === movimento.slice(0, 1)) {
        i--;
      } else {
        this.embaralhamento += '&nbsp;&nbsp;&nbsp;' + movimento;

        //Se for Megaminx, irá adicionar U ou U', além de quebrar a linha
        if (this.isMegaminx) {
          if ((i + 1) % 10 === 0) {
            const index = Number(Math.random() < 0.5);
            this.embaralhamento +=
              '&nbsp;&nbsp;&nbsp;' +
              categoria.movimentosExtras![index] +
              '<br>';
          }
        }
      }
      this.movimentoAnterior = movimento;
    }
  }

  //Pega um movimento aleatório no array de movimentos da categoria
  movimentoAleatorio(categoria: CategoriasInterface) {
    const min = 0;
    const max = categoria.movimentos.length - 1;
    const index = Math.floor(Math.random() * (max - min + 1)) + min;
    const movimento = categoria.movimentos[index];
    return movimento;
  }

  //Refaz o embaralhamento
  mudarEmbaralhamento() {
    this.embaralhar(this.nomeCategoria);
  }

  //Parte do cronômetro

  start() {
    if (!this.running) {
      this.intervalId = setInterval(() => {
        this.time++;
      }, 10); // Atualiza a cada 10 milissegundos
      this.running = true;
    }
  }

  stop() {
    if (this.running) {
      clearInterval(this.intervalId);
      this.running = false;
    }
  }

  reset() {
    if (!this.running) {
      this.time = 0;
    }
  }

  ngOnDestroy() {
    this.stop();
  }

  get formattedTime(): string {
    const milliseconds = this.time % 100;
    const seconds = Math.floor(this.time / 100) % 60;
    const minutes = Math.floor(this.time / 6000) % 60;
    return `${this.pad(minutes)}:${this.pad(seconds)}.${this.pad(
      milliseconds,
      2
    )}`;
  }

  private pad(num: number, size: number = 2): string {
    return num.toString().padStart(size, '0');
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.code === 'Space') {
      this.toggle();
      return;
    }
    if (event.key === 'r') {
      this.reset();
    }
  }

  toggle() {
    if (this.running) {
      this.stop();
      return;
    }
    if (!this.running) {
      this.time = 0;
    }
    this.start();
  }
}
