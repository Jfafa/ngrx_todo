import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTodoComponent } from './admin-todo.component';

describe('AdminTodoComponent', () => {
  let component: AdminTodoComponent;
  let fixture: ComponentFixture<AdminTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
