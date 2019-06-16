import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  constructor() {}

  getTodos() {
    return [
      {
        id: 1,
        title: "todo one",
        complete: false
      },
      {
        id: 2,
        title: "todo two",
        complete: true
      },
      {
        id: 3,
        title: "todo two",
        complete: false
      }
    ];
  }
}
