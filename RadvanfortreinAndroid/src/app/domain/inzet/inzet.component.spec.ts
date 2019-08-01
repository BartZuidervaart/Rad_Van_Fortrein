import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InzetComponent } from './inzet.component';

describe('InzetComponent', () => {
  let component: InzetComponent;
  let fixture: ComponentFixture<InzetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InzetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InzetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
