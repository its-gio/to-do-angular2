import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { Todo } from "../models/Todo";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class TodoService {
  todosURL: string = "https://jsonplaceholder.typicode.com/todos";
  todosLimit: string = "?_limit=10";

  // Creating private variable http and giving it the tupe of HttpClient
  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    // Using http get request on todosURL with the type of Todo (modules/Todo)
    return this.http.get<Todo[]>(`${this.todosURL}${this.todosLimit}`);
  }

  // Deleting from Server
  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todosURL}/${todo.id} `;
    return this.http.delete<Todo>(url, httpOptions);
  }

  // Checking complete and pushing to API
  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosURL}/${todo.id} `;
    return this.http.put(url, todo, httpOptions);
  }
}
