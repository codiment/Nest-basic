import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';

export interface User {
  id: number;
}

@Injectable()
export class TasksService {
  private tasks: User[] = [];

  getTasks() {
    return this.tasks;
  }

  getTaskById(id: number) {
    const taskFound = this.tasks.find((task) => task.id === id);

    if (!taskFound) {
      return new NotFoundException(`Task with id ${id} not found`);
    }
    return taskFound;
  }

  createTask(task: CreateTaskDto) {
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
    });
    return task;
  }
}
