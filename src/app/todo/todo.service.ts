import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todos = [
    { text: 'buy milk', id: 0, completed: false },
    { text: 'learn ngrx', id: 1, completed: false },
    { text: 'go to sleep', id: 2, completed: false }
  ];
  constructor() {}

  addTodo(todo: { text: string; completed: boolean }) {
    this.todos = [...this.todos, { ...todo, id: Date.now() }];
  }
}
