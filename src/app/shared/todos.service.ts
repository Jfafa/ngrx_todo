import{Injectable} from '@angular/core'
import { filter } from 'minimatch'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs/operators' 

export interface Todo{
    id: number
    title: string
    completed: boolean
    date?: any
  }


@Injectable({
  providedIn: 'root',
})
export class TodoService{

  constructor(private http : HttpClient){}

    public todos: Todo[] = []

    fetchTodos() : Observable<Todo[]>{
      return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(tap(todos => this.todos = todos))
    }

      onToggle(id: number){
        const idx = this.todos.findIndex(t => t.id === id)
        this.todos[idx].completed = !this.todos[idx].completed
      }

      removeTodo(id: number){
        this.todos = this.todos.filter(t => t.id !== id)
      }
}