import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetGolemComponent } from './meet-golem.component';

describe('MeetGolemComponent', () => {
  let component: MeetGolemComponent;
  let fixture: ComponentFixture<MeetGolemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetGolemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetGolemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
