import { Injectable, inject } from '@angular/core';
import { Todo } from '../models/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  http = inject(HttpClient);
  todoItems: Array<Todo> = [
  {
    id: 0,
    title: 'Groceries',
    description: `get week's meal prep supplies`,
    userId: 1,
    completed: false,
    createdAt: '2026-09-12T20:04:40.991Z',
  },
  {
    id: 1,
    title: 'Vet',
    description: `Felix's annual checkup`,
    userId: 1,
    completed: false,
    createdAt: '2026-09-11T08:04:40.991Z',
  },
]
  getTodosdFromApi() {
    const url =  `https://6aa6ccf4d7765db98507a184.mockapi.io/api/v1/todos`;
    return this.http.get<Array<Todo>>(url)
  }
}
