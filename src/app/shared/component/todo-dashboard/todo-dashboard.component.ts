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
  editObjToPatch !: Itodo;

  constructor() { }

  ngOnInit(): void {

    this.todoArr = todoData
  }

  getnewTodo(todo: Itodo){
    this.todoArr.unshift(todo)
  }

  getEditTodo(editObj : Itodo){

    this.editObjToPatch = editObj;

  }

  getUpdatedObj(updatedObj:Itodo){
    let getIndex = this.todoArr.findIndex(t => t.todoId === updatedObj.todoId);
    this.todoArr[getIndex] = updatedObj;
  }

}
