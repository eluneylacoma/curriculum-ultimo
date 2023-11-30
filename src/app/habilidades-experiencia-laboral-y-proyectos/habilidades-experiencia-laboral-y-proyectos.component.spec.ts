import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesExperienciaLaboralYProyectosComponent } from './habilidades-experiencia-laboral-y-proyectos.component';

describe('HabilidadesExperienciaLaboralYProyectosComponent', () => {
  let component: HabilidadesExperienciaLaboralYProyectosComponent;
  let fixture: ComponentFixture<HabilidadesExperienciaLaboralYProyectosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HabilidadesExperienciaLaboralYProyectosComponent]
    });
    fixture = TestBed.createComponent(HabilidadesExperienciaLaboralYProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
