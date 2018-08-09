import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todos = [
    { text: 'Buy milk', id: 0, completed: false },
    { text: 'Learn ngrx', id: 1, completed: false },
    { text: 'Go to sleep', id: 2, completed: false }
  ];
  constructor() {}

  addTodo(todo: { text: string; completed: boolean }) {
    this.todos = [...this.todos, { ...todo, id: Date.now() }];
  }

  removeTodo(todo: { text: string; completed: boolean, id: number }){
    this.todos = this.todos.filter(entry => entry.id !== todo.id );
  }

  toggleTodo(todo: { text: string; completed: boolean, id: number }){
    this.todos = this.todos.map(entry => entry.id === todo.id ? {...entry, completed: !entry.completed} : entry)
  }
}
