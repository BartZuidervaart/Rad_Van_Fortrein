import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InzettenComponent } from './inzetten.component';

describe('InzettenComponent', () => {
  let component: InzettenComponent;
  let fixture: ComponentFixture<InzettenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InzettenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InzettenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
