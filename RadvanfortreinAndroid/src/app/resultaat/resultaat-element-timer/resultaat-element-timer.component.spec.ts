import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultaatElementTimerComponent } from './resultaat-element-timer.component';

describe('ResultaatElementTimerComponent', () => {
  let component: ResultaatElementTimerComponent;
  let fixture: ComponentFixture<ResultaatElementTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultaatElementTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultaatElementTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
