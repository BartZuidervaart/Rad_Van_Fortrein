import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FietsComponent } from './fiets.component';

describe('FietsComponent', () => {
  let component: FietsComponent;
  let fixture: ComponentFixture<FietsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FietsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FietsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
