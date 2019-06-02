import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { TODOS } from './mock-todo';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
  getTodos(): Observable<Todo[]> {
  return of(TODOS);
}

getTodo(id: number): Observable<Todo> {
  return of(TODOS.find(todo=>todo.id === id));
}
}
