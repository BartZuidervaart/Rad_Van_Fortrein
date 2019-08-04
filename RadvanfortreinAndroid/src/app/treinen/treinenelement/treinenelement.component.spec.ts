import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinenelementComponent } from './treinenelement.component';

describe('TreinenelementComponent', () => {
  let component: TreinenelementComponent;
  let fixture: ComponentFixture<TreinenelementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreinenelementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreinenelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
