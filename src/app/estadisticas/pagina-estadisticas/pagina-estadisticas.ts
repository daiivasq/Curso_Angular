import { Component, inject } from '@angular/core';
import { ActividadesService } from '../../actividades/actividades';

@Component({
  selector: 'app-pagina-estadisticas',
  templateUrl: './pagina-estadisticas.html',
  styleUrl: './pagina-estadisticas.css',
})
export class PaginaEstadisticas {
  private readonly servicio = inject(ActividadesService);

  protected readonly total = this.servicio.total;
}
