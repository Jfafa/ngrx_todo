import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TodosComponent } from './todos/todos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminTodoComponent } from './admin-todo/admin-todo.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'user', component: TodosComponent, canActivate: [AuthGuard]},
  {path: 'admin', component: AdminTodoComponent, canActivate: [AdminGuard]},
  {path: 'login', component: LoginComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TodosComponent, LoginComponent, PageNotFoundComponent, AdminTodoComponent]
