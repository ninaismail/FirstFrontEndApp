export interface ITask {
    id: number;
    name: string;
  }
  export class Task implements ITask{
    id: number;
    name: string;
    constructor(taskData: any) {
        this.id = taskData.id;
        this.name = taskData.name;
    }
}