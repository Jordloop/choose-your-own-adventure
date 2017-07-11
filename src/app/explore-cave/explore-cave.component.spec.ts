import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreCaveComponent } from './explore-cave.component';

describe('ExploreCaveComponent', () => {
  let component: ExploreCaveComponent;
  let fixture: ComponentFixture<ExploreCaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreCaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreCaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
