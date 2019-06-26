import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { Todo } from "../models/Todo";

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
}
