import { Component,  OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../shared/todos.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  private loading: boolean = true;

  constructor(public todosService: TodoService) { }

  ngOnInit() {
    this.todosService.fetchTodos().subscribe(() => {
      this.loading = false
    })
  }

  onChange(id: number){
    this.todosService.onToggle(id)
  }

  removeTodo(id: number){
    this.todosService.removeTodo(id)
  }

  editTodo(id: number){
    
  }
  

}
