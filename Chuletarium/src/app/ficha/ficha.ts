import { Component, OnInit, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface Ficha {
  id: number;
  titulo: string;
  nombre: string;
  autor: string;
}

@Component({
  selector: 'app-ficha',
  imports: [],
  templateUrl: './ficha.html',
  styleUrl: './ficha.scss',
})
export class Ficha implements OnInit{
  ficha:any;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(){
    
    /*
     // Nos "suscribimos" a los cambios de la URL
    //this.route.paramMap.subscribe(params => {
      //this.fichaId = params.get('id');
      // Aquí podrías llamar a un servicio para refrescar los datos automáticamente
    });
  */
  }
}
