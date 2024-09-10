import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMVacanciaComponent } from './update-mvacancia.component';

describe('UpdateMVacanciaComponent', () => {
  let component: UpdateMVacanciaComponent;
  let fixture: ComponentFixture<UpdateMVacanciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateMVacanciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMVacanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
