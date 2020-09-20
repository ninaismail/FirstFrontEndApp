export interface ITask {
  id: number;
  title: string;
}
export class Task implements ITask {
  id: number;
  title: string;

  constructor(taskData: any) {
    this.id = taskData._id;
    this.title = taskData.title;
  }
}
