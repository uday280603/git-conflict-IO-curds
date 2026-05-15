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
}
