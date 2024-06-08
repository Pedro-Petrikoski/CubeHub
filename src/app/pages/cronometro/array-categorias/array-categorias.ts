import { CategoriasInterface } from './array-categorias.interface';

export const categoriasArray: CategoriasInterface[] = [
  {
    nomeCategoria: '2x2',
    movimentos: ['R', "R'", 'R2', 'U', "U'", 'U2', 'F', "F'", 'F2'],
    qtdMovimentos: 9,
  },
  {
    nomeCategoria: '3x3',
    movimentos: [
      'R',
      "R'",
      'R2',
      'L',
      "L'",
      'L2',
      'U',
      "U'",
      'U2',
      'D',
      "D'",
      'D2',
      'F',
      "F'",
      'F2',
      'B',
      "B'",
      'B2',
    ],
    qtdMovimentos: 20,
  },
  {
    nomeCategoria: 'Megaminx',
    movimentos: ['R++', 'R--', 'D++', 'D--'],
    movimentosExtras: ['U', "U'"],
    qtdMovimentos: 70,
  },
];
