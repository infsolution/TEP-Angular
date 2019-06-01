import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { TODOS } from './mock-todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
}
