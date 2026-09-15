import { Component, input, output } from '@angular/core';
import { Todo } from '../../models/todo.type';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { HighlightCompletedTodo } from '../../directives/highlight-completed-todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [DatePipe, TitleCasePipe, HighlightCompletedTodo],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css',
})
export class TodoItem {
  todo = input.required<Todo>();
  todoToggled = output<Todo>();
  todoClicked() {
    this.todoToggled.emit(this.todo());
  }
}
