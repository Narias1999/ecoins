import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCiuComponent } from './register-ciu.component';

describe('RegisterCiuComponent', () => {
  let component: RegisterCiuComponent;
  let fixture: ComponentFixture<RegisterCiuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterCiuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCiuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
