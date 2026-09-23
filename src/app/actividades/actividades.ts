import { computed, Injectable, signal } from '@angular/core';
import { Actividad, EstadoActividad } from '../modelos/actividad';

const INICIALES: readonly Actividad[] = [
  { id: 1, titulo: 'Preparar estructura HTML', estado: 'completada', prioridad: 'alta', creadaEn: '2026-08-10', destacada: false },
  { id: 2, titulo: 'Revisar contraste', estado: 'en_progreso', prioridad: 'media', creadaEn: '2026-08-12', destacada: true },
  { id: 3, titulo: 'Practicar TypeScript', estado: 'pendiente', prioridad: 'alta', creadaEn: '2026-08-14', destacada: false },
  { id: 4, titulo: 'Comprobar vista estrecha', estado: 'pendiente', prioridad: 'baja', creadaEn: '2026-08-16', destacada: false },
  { id: 5, titulo: 'Ejecutar el build', estado: 'pendiente', prioridad: 'media', creadaEn: '2026-08-18', destacada: false },
];

@Injectable({ providedIn: 'root' })
export class ActividadesService {
  private readonly lista = signal<Actividad[]>(INICIALES.map((actividad) => ({ ...actividad })));

  readonly actividades = this.lista.asReadonly();
  readonly total = computed(() => this.lista().length);

  buscarPorId(id: number): Actividad | undefined {
    return this.lista().find((actividad) => actividad.id === id);
  }

  alternarDestacada(id: number): void {
    this.lista.update((actual) =>
      actual.map((actividad) =>
        actividad.id === id ? { ...actividad, destacada: !actividad.destacada } : actividad,
      ),
    );
  }

  avanzarEstado(id: number): void {
    this.lista.update((actual) =>
      actual.map((actividad) =>
        actividad.id === id
          ? { ...actividad, estado: this.siguienteEstado(actividad.estado) }
          : actividad,
      ),
    );
  }

  eliminar(id: number): void {
    this.lista.update((actual) => actual.filter((actividad) => actividad.id !== id));
  }

  vaciar(): void {
    this.lista.set([]);
  }

  private siguienteEstado(estado: EstadoActividad): EstadoActividad {
    if (estado === 'pendiente') return 'en_progreso';
    if (estado === 'en_progreso') return 'completada';
    return 'completada';
  }
}
