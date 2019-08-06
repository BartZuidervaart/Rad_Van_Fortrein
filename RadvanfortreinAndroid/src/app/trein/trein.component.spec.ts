import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinComponent } from './trein.component';

describe('TreinComponent', () => {
  let component: TreinComponent;
  let fixture: ComponentFixture<TreinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
