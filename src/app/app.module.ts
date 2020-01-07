import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card'
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './store/reducers/todo.reducer';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { MatDialogModule } from '@angular/material/dialog';
import { EditDialogueComponent } from './edit-dialogue/edit-dialogue.component';
import { MatInputModule } from '@angular/material/input';
import { usersReducer } from './store/reducers/users.reducer';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminTodoComponent } from './admin-todo/admin-todo.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';
import { TodoEffects } from './store/effects/todos.effects';
import { EffectsModule } from '@ngrx/effects';
@NgModule({
  declarations: [
    AppComponent,
    EditDialogueComponent,
    routingComponents,
    PageNotFoundComponent,
    AdminTodoComponent
  ],
  entryComponents: [EditDialogueComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    StoreModule.forRoot({ todoList: todoReducer,  currentUser: usersReducer, }),
    FormsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    MatDialogModule,
    MatInputModule,
    EffectsModule.forRoot([TodoEffects]),
  ],
  providers: [AuthGuard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
