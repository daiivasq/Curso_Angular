import { Routes } from '@angular/router';
import { PaginaActividades } from './actividades/pagina-actividades/pagina-actividades';
import { PaginaEstadisticas } from './estadisticas/pagina-estadisticas/pagina-estadisticas';
import { PaginaNoEncontrada } from './compartido/pagina-no-encontrada/pagina-no-encontrada';

export const routes: Routes = [
  { path: '', redirectTo: 'actividades', pathMatch: 'full' },
  { path: 'actividades', component: PaginaActividades },
  { path: 'estadisticas', component: PaginaEstadisticas },
  { path: '**', component: PaginaNoEncontrada },
];
