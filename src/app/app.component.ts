import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppServiceService } from './app-service.service';
import { ITask, Task } from './ITask';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'Homework';
  tasks = [];
  tasksObservable: Observable<Task[]>;

  constructor(private service: AppServiceService) {}

  ngOnInit(): void {
    this.service.getTasks().subscribe((res) => {
      // console.log(tasks);
      if (res.success) {
        this.tasks = res.data;
      } else {
        console.log(res.data);
      }
    });
  }
}
