import { Component, inject, OnInit, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Todo } from '../models/todo.type';
import { TodosService } from '../services/todos';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);

  ngOnInit(): void {
    console.log(this.todoService.todoItems);
    // set value of signal to output of service
    this.todoItems.set(this.todoService.todoItems);
  }
}
