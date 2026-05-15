import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Itodo } from '../../models/Itodo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  isInEditMode : boolean  = false;
  @ViewChild('todoItem') todoItem !: ElementRef
  @Output() emitnewTodo : EventEmitter<Itodo> = new EventEmitter<Itodo>()

  constructor() { }
  ngOnInit(): void {
  }

  onAdd(){
    let todoVal = this.todoItem.nativeElement.value
    if(todoVal.length > 0){
      let newTodo : Itodo = {
        todoItem: todoVal,
        todoId: Date.now()
      }
      this.emitnewTodo.emit(newTodo)
      this.todoItem.nativeElement.value= ''

    }
    }

}
