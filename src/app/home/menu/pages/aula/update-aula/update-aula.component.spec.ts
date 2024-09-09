import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAulaComponent } from './update-aula.component';

describe('UpdateAulaComponent', () => {
  let component: UpdateAulaComponent;
  let fixture: ComponentFixture<UpdateAulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateAulaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
