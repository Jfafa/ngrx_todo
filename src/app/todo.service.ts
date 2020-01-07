import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  private _getTodosUrl = 'http://localhost:3000/api/todos'
  private _markTodoUrl = 'http://localhost:3000/api/marktodo'
  private _editTodoUrl = 'http://localhost:3000/api/edittodo'
  private _deleteTodoUrl = 'http://localhost:3000/api/deletetodo'
  private _addTodoUrl = 'http://localhost:3000/api/newtodo'


  public getTodos() {
    return this.http.get<any>(this._getTodosUrl)
  }

  public addTodo(todoItem) {
    return this.http.post(this._addTodoUrl, todoItem)
  }

  public markTodo(id){
    return this.http.put(this._markTodoUrl, {id})
  }

  public editTodo(todoItem){
    return this.http.put(this._editTodoUrl, todoItem)
  }

  public deleteTodo(id){
    return this.http.post(this._deleteTodoUrl, {id})
  }
}
