import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Login_successComponent } from './login-success.component';

describe('LoginsuccessComponent', () => {
  let component: Login_successComponent;
  let fixture: ComponentFixture<Login_successComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Login_successComponent]
    });
    fixture = TestBed.createComponent(Login_successComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
