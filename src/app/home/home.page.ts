import { Component } from '@angular/core';
import { TodoService } from '../todo/todo.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(
    private todoService: TodoService,
    private alertCtrl: AlertController
  ) {}

  get todos() {
    return this.todoService.todos;
  }

  async addTodo() {
    const popup = await this.alertCtrl.create({
      header: 'Create Todo',
      inputs: [
        {
          type: 'text',
          name: 'text',
          placeholder: 'Enter todo text'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: ({ text }) => {
            this.todoService.addTodo({ text, completed: false });
          }
        }
      ]
    });
    await popup.present();
  }

  removeTodo(todo){
    this.todoService.removeTodo(todo)
  }

  completeTodo(todo){
    this.todoService.toggleTodo(todo)
  }
}
