import { Routes } from '@angular/router';
import { PaginaActividades } from './actividades/pagina-actividades/pagina-actividades';
import { PaginaNoEncontrada } from './compartido/pagina-no-encontrada/pagina-no-encontrada';
import { DetalleActividad } from './actividades/detalle-actividad/detalle-actividad';
import { SeccionActividades } from './actividades/seccion-actividades/seccion-actividades';

export const routes: Routes = [
  { path: '', redirectTo: 'actividades', pathMatch: 'full' },
  {
    path: 'actividades',
    component: SeccionActividades,
    children: [
      { path: '', component: PaginaActividades, title: 'Actividades' },
      { path: 'nueva', component: PaginaNoEncontrada, title: 'Nueva actividad' },
      { path: ':id', component: DetalleActividad, title: 'Detalle de la actividad' },
    ],
  },
  {
    path: 'estadisticas',
    title: 'Estadísticas',
    loadComponent: () =>
      import('./estadisticas/pagina-estadisticas/pagina-estadisticas').then(
        (module) => module.PaginaEstadisticas,
      ),
  },
  { path: '**', component: PaginaNoEncontrada, title: 'Página no encontrada' },
];
