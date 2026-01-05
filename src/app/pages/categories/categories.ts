// src/app/pages/categories/categories.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

type CategoryGroup = {
  title: string;
  icon: string;
  tags: string[];
};

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './categories.html',
  styleUrls: ['./categories.scss'],
})
export class CategoriesComponent {
  groups: CategoryGroup[] = [
    {
      title: 'Lenguajes de Programación',
      icon: '</>',
      tags: ['Python', 'JavaScript', 'Java', 'HTML', 'CSS3', 'PHP'],
    },
    {
      title: 'Consultas en Base de Datos',
      icon: '⛁',
      tags: ['MariaDB', 'MySQL', 'PostgreSQL', 'SQLite'],
    },
    {
      title: 'Comandos de SO',
      icon: '>_',
      tags: ['Windows', 'Linux', 'MacOS'],
    },
  ];
}
