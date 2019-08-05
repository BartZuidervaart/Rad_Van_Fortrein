import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultaatspelerComponent } from './resultaatspeler.component';

describe('ResultaatspelerComponent', () => {
  let component: ResultaatspelerComponent;
  let fixture: ComponentFixture<ResultaatspelerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultaatspelerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultaatspelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
