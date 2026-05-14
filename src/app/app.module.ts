import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodoDashboardComponent } from './shared/component/todo-dashboard/todo-dashboard.component';
import { TodoListComponent } from './shared/component/todo-list/todo-list.component';
import { TodoFormComponent } from './shared/component/todo-form/todo-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardComponent,
    TodoListComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
