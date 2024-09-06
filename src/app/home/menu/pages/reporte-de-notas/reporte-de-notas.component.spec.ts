import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteDeNotasComponent } from './reporte-de-notas.component';

describe('ReporteDeNotasComponent', () => {
  let component: ReporteDeNotasComponent;
  let fixture: ComponentFixture<ReporteDeNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReporteDeNotasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteDeNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
