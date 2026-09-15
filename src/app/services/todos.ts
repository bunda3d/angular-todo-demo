import { Injectable, inject } from '@angular/core';
import { Todo } from '../models/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  http = inject(HttpClient);
  getTodosFromApi() {
    const url =  `https://6aa6ccf4d7765db98507a184.mockapi.io/api/v1/todos`;
    return this.http.get<Array<Todo>>(url)
  }
}
