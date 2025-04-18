import { Injectable } from '@nestjs/common';

export interface User {
  name: string;
  age: number;
}

@Injectable()
export class TasksService {
  getTasks() : User {
    return {
      name: 'Juan',
      age: 20,
    }
  }

  
}
