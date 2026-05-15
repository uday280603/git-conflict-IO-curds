import { Component, Input, OnInit } from '@angular/core';
import { Itodo } from '../../models/Itodo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input()  getAllTodo!: Itodo[];

  constructor() { }

  ngOnInit(): void {
  }

}
