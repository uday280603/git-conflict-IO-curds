import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
// import { Itodo } from '../../models/Itodo';
// import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Itodo } from '../../models/Itodo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit, OnChanges {
  isInEditMode: boolean = false;
  @Input() getEditObj!: Itodo;

  @ViewChild('todoItem') todoItem!: ElementRef;

  @Output() emitUpdatedObj : EventEmitter<Itodo> = new EventEmitter<Itodo>()
  
  @Output() emitnewTodo : EventEmitter<Itodo> = new EventEmitter<Itodo>()
  // emitnewTodo: any;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes['getEditObj'].currentValue) {
      this.isInEditMode = true;
      this.todoItem.nativeElement.value = this.getEditObj.todoItem;
    }
  }

  ngOnInit(): void {}

  onUpdateTodo() {
    let UPDATED_OBJ = {
      todoId: this.getEditObj.todoId,
      todoItem: this.todoItem.nativeElement.value,
    };

    this.emitUpdatedObj.emit(UPDATED_OBJ)
     this.todoItem.nativeElement.value ='';
     this.isInEditMode = false;


  }
// export class TodoFormComponent implements OnInit {

//   isInEditMode : boolean  = false;
//   @ViewChild('todoItem') todoItem !: ElementRef
//   @Output() emitnewTodo : EventEmitter<Itodo> = new EventEmitter<Itodo>()

//   constructor() { }
//   ngOnInit(): void {
//   }

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
