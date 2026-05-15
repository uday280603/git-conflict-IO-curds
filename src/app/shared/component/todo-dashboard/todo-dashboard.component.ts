import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../models/Itodo';
import { todoData } from '../../const/Itodo';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {

  todoArr !: Itodo[];

  constructor() { }

  ngOnInit(): void {

    this.todoArr = todoData
  }

  getnewTodo(todo: Itodo){
    this.todoArr.unshift(todo)
  }

}
