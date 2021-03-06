import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';


@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
	@Input() todo: Todo;
  title = 'Tarefa';
  width: number;

  constructor( private route: ActivatedRoute,
  private todoService: TodoService,
  private location: Location) { }

  ngOnInit() {
  this.width = 0;
  this.getTodo();
  }
  getTodo(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.todoService.getTodo(id)
    .subscribe(todo => this.todo = todo);
}
	goBack(): void {
	  this.location.back();
	}
}
