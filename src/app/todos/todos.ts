import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos';
import { DatePipe, NgIf } from '@angular/common';
import { Todo } from '../models/todo.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [DatePipe, NgIf],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);

  ngOnInit(): void {
    this.todoService
    .getTodosFromApi()
    .pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    )
    .subscribe((todos) => {
      // set signal to returned API values
      this.todoItems.set(todos);
    });
  }
}
