import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadMVacanciaComponent } from './read-mvacancia.component';

describe('ReadMVacanciaComponent', () => {
  let component: ReadMVacanciaComponent;
  let fixture: ComponentFixture<ReadMVacanciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadMVacanciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadMVacanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
