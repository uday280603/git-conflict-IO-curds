import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodo } from '../../models/Itodo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input()  getAllTodo!: Itodo[];

  @Output() emitEditObj : EventEmitter<Itodo>  = new EventEmitter<Itodo>();

  constructor() { }

  ngOnInit(): void {
  }

  onEditTodo(editTodo : Itodo){

    this.emitEditObj.emit(editTodo)

    //hgruwe
  }

}
