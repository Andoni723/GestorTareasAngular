import { Component, OnInit } from '@angular/core';
import { Task } from '../taskModel';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() {
  }

  public taskList: Task [] = [
    {id: 1, description: 'Tarea numero uno', status: 'Completada'},
    {id: 2, description: 'Tarea numero dos', status: 'En proceso'},
    {id: 3, description: 'Tarea numero tres', status: 'Pendiente'},
    {id: 35, description: 'Tarea numero cuatro', status: 'Pendiente'}
  ];

  ngOnInit() {

    console.log('Lista: ', this.taskList);

  }

  addTask() {
    this.taskList.push(new Task());
  }

  removeTask(index: number) {
    if (index > -1) {
      this.taskList.splice(index, 1);
    }
  }

}
