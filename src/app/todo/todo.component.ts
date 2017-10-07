import { Component } from '@angular/core';

interface Todo {
  label: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  currentLabel: string;

  todoList: Todo[] = [
    { label: 'Buy Milk!', completed: false },
    { label: 'Save the world!', completed: true }
  ];

  toggleState(todo: Todo) {
    todo.completed = !todo.completed;
  }

  removeTodo(todo: Todo) {
    this.todoList.splice(this.todoList.indexOf(todo), 1);
  }

  addTodo() {
    this.todoList.push({
      label: this.currentLabel,
      completed: false
    });
    this.currentLabel = '';
  }

}
