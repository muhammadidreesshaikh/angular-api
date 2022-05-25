import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersLisitingComponent } from './users-lisiting.component';

describe('UsersLisitingComponent', () => {
  let component: UsersLisitingComponent;
  let fixture: ComponentFixture<UsersLisitingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersLisitingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersLisitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
