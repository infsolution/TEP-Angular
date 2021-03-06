import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import {TodoService} from '../todo.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
	todos: Todo[];
	//selectedTodo: Todo;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }
    /*onSelect(todo: Todo): void {
    this.selectedTodo = todo;
  }*/
    getTodos(): void {
    this.todoService.getTodos()
        .subscribe(todos => this.todos = todos);
  }

}
