import { Component, OnInit } from '@angular/core';
import tasks from 'src/app/tasks'
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  Tasks:any[];
  constructor() { }

  ngOnInit() {
    this.Tasks=tasks;
  }

}
