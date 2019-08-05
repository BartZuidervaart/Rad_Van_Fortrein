import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultaatElementComponent } from './resultaat-element.component';

describe('ResultaatElementComponent', () => {
  let component: ResultaatElementComponent;
  let fixture: ComponentFixture<ResultaatElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultaatElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultaatElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
