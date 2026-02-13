import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryTimelineComponent } from './memory-timeline.component';

describe('MemoryTimelineComponent', () => {
  let component: MemoryTimelineComponent;
  let fixture: ComponentFixture<MemoryTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemoryTimelineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoryTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
