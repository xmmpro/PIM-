import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

type LangTile = {
  key: string;   // lo usaremos como categoria al filtrar
  name: string;
  icon?: string; // opcional (texto corto)
  h: number;     // tono para colorcito distinto por tarjeta
};

@Component({
  selector: 'app-programming',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './programming.html',
  styleUrl: './programming.scss',
})
export class ProgrammingComponent {
  query = '';

  // ✅ Lista "razonable" para proyecto (útil y no infinita)
  languages: LangTile[] = [
    { key: 'JavaScript', name: 'JavaScript', icon: 'JS', h: 52 },
    { key: 'TypeScript', name: 'TypeScript', icon: 'TS', h: 200 },
    { key: 'Python', name: 'Python', icon: 'Py', h: 215 },
    { key: 'Java', name: 'Java', icon: 'J', h: 8 },
    { key: 'C#', name: 'C#', icon: 'C#', h: 290 },
    { key: 'C', name: 'C', icon: 'C', h: 220 },
    { key: 'C++', name: 'C++', icon: 'C++', h: 210 },
    { key: 'PHP', name: 'PHP', icon: 'PHP', h: 235 },
    { key: 'Go', name: 'Go', icon: 'Go', h: 195 },
    { key: 'Rust', name: 'Rust', icon: 'Rs', h: 10 },
    { key: 'Kotlin', name: 'Kotlin', icon: 'Kt', h: 260 },
    { key: 'Swift', name: 'Swift', icon: 'Sw', h: 5 },

    { key: 'HTML', name: 'HTML', icon: '<>', h: 14 },
    { key: 'CSS3', name: 'CSS3', icon: 'CSS', h: 205 },
    { key: 'Sass', name: 'Sass', icon: 'S', h: 320 },

    { key: 'Markdown', name: 'Markdown', icon: 'MD', h: 260 },
    { key: 'JSON', name: 'JSON', icon: '{}', h: 210 },
    { key: 'YAML', name: 'YAML', icon: 'Y', h: 350 },
    { key: 'Bash', name: 'Bash', icon: '>_', h: 180 },

    { key: 'Git', name: 'Git', icon: 'git', h: 15 },
    { key: 'Docker', name: 'Docker', icon: 'dk', h: 205 },
  ];

  get filtered(): LangTile[] {
    const q = this.query.trim().toLowerCase();
    if (!q) return this.languages;
    return this.languages.filter((l) => l.name.toLowerCase().includes(q));
  }

  trackByKey = (_: number, item: LangTile) => item.key;
}
