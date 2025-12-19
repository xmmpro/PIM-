import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { CategoriesComponent } from './pages/categories/categories';
import { SnippetsComponent } from './pages/snippets/snippets';
import { AboutComponent } from './pages/about/about';
import { FichaList } from "./ficha-list/ficha-list";
import { Ficha } from './ficha/ficha';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'snippets', component: SnippetsComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: FichaList, pathMatch: "full"},
  { path: 'ficha/:id', component: Ficha },
  { path: '**', redirectTo: '' }
];
