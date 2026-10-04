import { provideHttpClient, withFetch } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { ActividadesService } from './actividades';

const REMOTAS = [
  { id: 1, task_title: 'Revisar el informe', description: null, priority_level: 3, is_done: false, created_at: '2026-08-10T09:00:00Z' },
  { id: 2, task_title: 'Preparar la reunión', description: 'Con el equipo.', priority_level: 2, is_done: false, created_at: '2026-08-12T09:00:00Z' },
  { id: 3, task_title: 'Llamar al proveedor', description: null, priority_level: 1, is_done: true, created_at: '2026-08-14T09:00:00Z' },
];

describe('ActividadesService', () => {
  let servicio: ActividadesService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideHttpClient(withFetch()), provideHttpClientTesting()] });
    http = TestBed.inject(HttpTestingController);
    servicio = TestBed.inject(ActividadesService);
    http.expectOne('/api/actividades').flush(REMOTAS);
  });

  describe('al cargar', () => {
    it('trae las actividades del servidor traducidas', () => {
      expect(servicio.total()).toBe(3);
      expect(servicio.actividades()[0].titulo).toBe('Revisar el informe');
      expect(servicio.actividades()[0].prioridad).toBe('alta');
    });
    it('cuenta pendientes y completadas por separado', () => {
      expect(servicio.pendientes()).toBe(2);
      expect(servicio.completadas()).toBe(1);
      expect(servicio.porcentaje()).toBe(33);
    });
  });

});
