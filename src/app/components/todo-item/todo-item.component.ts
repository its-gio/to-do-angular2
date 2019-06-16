import { Component, OnInit, Input } from "@angular/core";
import { Todo } from "src/app/models/Todo";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.scss"]
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() {}

  ngOnInit() {}

  // Add complete class to item
  setClasses() {
    let classes = {
      todo: true,
      "is-complete": this.todo.complete
    };

    return classes;
  }

  onToggle(todo) {
    console.log("toggled");
  }

  onDelete(todo) {
    console.log("Deleted!");
  }
}
