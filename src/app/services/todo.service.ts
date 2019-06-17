import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Todo } from "../models/Todo";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  todosURL = "https://jsonplaceholder.typicode.com/todos";

  // Creating private variable http and giving it the tupe of HttpClient
  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    // Using http get request on todosURL with the type of Todo (modules/Todo)
    return this.http.get<Todo[]>(this.todosURL);
  }
}
