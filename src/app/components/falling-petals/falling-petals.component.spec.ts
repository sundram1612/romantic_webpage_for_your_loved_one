import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FallingPetalsComponent } from './falling-petals.component';

describe('FallingPetalsComponent', () => {
  let component: FallingPetalsComponent;
  let fixture: ComponentFixture<FallingPetalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FallingPetalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FallingPetalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
