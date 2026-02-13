import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuteInteractionComponent } from './cute-interaction.component';

describe('CuteInteractionComponent', () => {
  let component: CuteInteractionComponent;
  let fixture: ComponentFixture<CuteInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuteInteractionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuteInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
