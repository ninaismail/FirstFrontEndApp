import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITask, Task } from './ITask';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AppServiceService {
  url = 'http://localhost:3000/todos';
  constructor(private http: HttpClient) {}

  getTasks(): Observable<any> {
    return this.http.get<any>(this.url);
  }
  /*
public addTask(task: ITask) {
  this.http.post(this.url, task);
}
public updateTask(task: ITask, id:number) {
  const url = `${this.url}/${id}`; 
  this.http.put(this.url, task);
}
public deleteTask(id:number) {
  const url = `${this.url}/${id}`; 
  this.http.delete(this.url);
}*/
}
