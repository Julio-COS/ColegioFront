import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadDocenteComponent } from './read-docente.component';

describe('ReadDocenteComponent', () => {
  let component: ReadDocenteComponent;
  let fixture: ComponentFixture<ReadDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadDocenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
