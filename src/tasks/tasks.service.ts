import { Injectable } from '@nestjs/common';

export interface User {
  name: string;
  age: number;
}

@Injectable()
export class TasksService {

  private tasks: User[] = [];

  getTasks() {
    return this.tasks;
  }

  createTask(task: any) {
    console.log(task)
    this.tasks.push(task)
    return task;

  }


}
