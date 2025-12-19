import { Component, OnInit, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface Ficha {
  id: number;
  titulo: string;
  nombre: string;
  autor: string;
}

@Component({
  selector: 'app-ficha-item',
  imports: [],
  templateUrl: './ficha-item.html',
  styleUrl: './ficha-item.scss',
})

export class FichaItem implements OnInit {
  ficha:any;
  data = input<Ficha>();

  fichaId : string | null = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit(){
    
     // Nos "suscribimos" a los cambios de la URL
    this.route.paramMap.subscribe(params => {
      this.fichaId = params.get('id');
      // Aquí podrías llamar a un servicio para refrescar los datos automáticamente
    });
  }
}
