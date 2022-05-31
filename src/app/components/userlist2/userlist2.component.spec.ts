import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userlist2Component } from './userlist2.component';

describe('Userlist2Component', () => {
  let component: Userlist2Component;
  let fixture: ComponentFixture<Userlist2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Userlist2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Userlist2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
