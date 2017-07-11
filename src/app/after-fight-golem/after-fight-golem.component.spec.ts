import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterFightGolemComponent } from './after-fight-golem.component';

describe('AfterFightGolemComponent', () => {
  let component: AfterFightGolemComponent;
  let fixture: ComponentFixture<AfterFightGolemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterFightGolemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterFightGolemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
