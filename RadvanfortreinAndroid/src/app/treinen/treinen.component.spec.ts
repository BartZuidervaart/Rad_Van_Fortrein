import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinenComponent } from './treinen.component';

describe('TreinenComponent', () => {
  let component: TreinenComponent;
  let fixture: ComponentFixture<TreinenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreinenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreinenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
