import { Component, OnInit } from "@angular/core";

import { TodoService } from "../../services/todo.service";
import { Todo } from "../../models/Todo";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.scss"]
})
export class TodosComponent implements OnInit {
  // Creating global todos variable and setting the type of Todo array from modules folder
  todos: Todo[];

  // Assigning todoService to serive in services folder (todo.service) to use method below
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    // Assigning method return to todos (this global variable)
    this.todos = this.todoService.getTodos();
  }
}
