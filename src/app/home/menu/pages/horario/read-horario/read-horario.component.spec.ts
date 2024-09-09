import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadHorarioComponent } from './read-horario.component';

describe('ReadHorarioComponent', () => {
  let component: ReadHorarioComponent;
  let fixture: ComponentFixture<ReadHorarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadHorarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
