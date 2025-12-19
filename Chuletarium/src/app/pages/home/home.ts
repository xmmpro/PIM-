import { Component } from '@angular/core';
import { FichaList } from '../../ficha-list/ficha-list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FichaList],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {}
