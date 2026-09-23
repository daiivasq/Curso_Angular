import { Routes } from '@angular/router';
import { PaginaActividades } from './actividades/pagina-actividades/pagina-actividades';
import { PaginaNoEncontrada } from './compartido/pagina-no-encontrada/pagina-no-encontrada';
import { DetalleActividad } from './actividades/detalle-actividad/detalle-actividad';
import { SeccionActividades } from './actividades/seccion-actividades/seccion-actividades';
import { puedeSalir } from './actividades/puede-salir';

export const routes: Routes = [
  { path: '', redirectTo: 'actividades', pathMatch: 'full' },
  {
    path: 'actividades',
    component: SeccionActividades,
    children: [
      { path: '', component: PaginaActividades, title: 'Actividades' },
      {
        path: 'nueva',
        title: 'Nueva actividad',
        canDeactivate: [puedeSalir],
        loadComponent: () =>
          import('./actividades/formulario-actividad/formulario-actividad').then(
            (module) => module.FormularioActividad,
          ),
      },
      { path: ':id', component: DetalleActividad, title: 'Detalle de la actividad' },
      {
        path: ':id/editar',
        title: 'Editar actividad',
        canDeactivate: [puedeSalir],
        loadComponent: () =>
          import('./actividades/formulario-actividad/formulario-actividad').then(
            (module) => module.FormularioActividad,
          ),
      },
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
