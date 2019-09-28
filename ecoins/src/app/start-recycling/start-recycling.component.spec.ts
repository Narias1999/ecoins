import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartRecyclingComponent } from './start-recycling.component';

describe('StartRecyclingComponent', () => {
  let component: StartRecyclingComponent;
  let fixture: ComponentFixture<StartRecyclingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartRecyclingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartRecyclingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
