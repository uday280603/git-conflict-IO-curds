import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoDashpboardComponent } from './shared/component/todo-dashpboard/todo-dashpboard.component';
import { TodoDashboardComponent } from './shared/component/todo-dashboard/todo-dashboard.component';
import { TodoListComponent } from './shared/component/todo-list/todo-list.component';
import { TodoFormComponent } from './shared/component/todo-form/todo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoDashpboardComponent,
    TodoDashboardComponent,
    TodoListComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
