import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { TodoDetailComponent }  from './todo-detail/todo-detail.component';

const routes: Routes = [
	{ path: 'dashboard', component: DashboardComponent },
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'todos', component: TodosComponent },
	{ path: 'detail/:id', component: TodoDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
