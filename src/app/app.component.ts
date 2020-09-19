import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppServiceService } from './app-service.service';
import { ITask, Task } from './ITask';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'Homework';
  public tasks=[];
  tasksObservable: Observable<Task[]>;
  constructor(private service: AppServiceService){
  }
  ngOnInit(): void { 
  this.service.getTasks().subscribe(tasks => {
      this.tasks = tasks;
  });
    this.tasksObservable = this.service.getTasks();
}

}
