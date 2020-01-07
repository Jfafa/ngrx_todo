import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  private _getTodosUrl = 'http://localhost:3000/api/todos'

  public getTodos() {
    return this.http.get<any>(this._getTodosUrl)
  }
}
