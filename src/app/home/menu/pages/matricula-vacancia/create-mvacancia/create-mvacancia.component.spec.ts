import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMVacanciaComponent } from './create-mvacancia.component';

describe('CreateMVacanciaComponent', () => {
  let component: CreateMVacanciaComponent;
  let fixture: ComponentFixture<CreateMVacanciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateMVacanciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMVacanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
