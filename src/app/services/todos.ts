import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.type';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
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
  constructor() {}
}
