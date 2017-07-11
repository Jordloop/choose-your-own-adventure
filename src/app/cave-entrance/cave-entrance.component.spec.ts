import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaveEntranceComponent } from './cave-entrance.component';

describe('CaveEntranceComponent', () => {
  let component: CaveEntranceComponent;
  let fixture: ComponentFixture<CaveEntranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaveEntranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaveEntranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
