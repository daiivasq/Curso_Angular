import type { Actividad, EstadoActividad } from './tipos.js';

const NOMBRES: Record<EstadoActividad, string> = {
  pendiente: 'Pendiente',
  en_progreso: 'En progreso',
  completada: 'Completada',
};

export function crearEtiqueta(actividad: Actividad): string {
  return `${actividad.titulo} · ${NOMBRES[actividad.estado]}`;
}