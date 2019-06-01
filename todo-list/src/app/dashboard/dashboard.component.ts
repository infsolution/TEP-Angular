import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	todos: Todo[];
	title = 'Lista de Tarefas';
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  	this.getTodos();
  }
  getTodos(): void {
    this.todoService.getTodos()
        .subscribe(todos => this.todos = todos.slice(1,10));
  }
}

