import { Component } from '@angular/core';
import { FichaItem } from '../ficha-item/ficha-item';

export interface Ficha {
  id: number;
  titulo: string;
  nombre: string;
  autor: string;
}

@Component({
  selector: 'app-ficha-list',
  imports: [FichaItem],
  templateUrl: './ficha-list.html',
  styleUrl: './ficha-list.scss',
})
export class FichaList {
  fichas = [ 
    {
      id: 1,
      titulo: 'Angular',
      nombre: 'xd',
      autor: 'Ana',
    }
  ];
}
