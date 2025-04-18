import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TaskController {

  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTask() {
    return this.tasksService.getTasks();
  }

  @Post()
  createTask() {
    return 'Creando tareas'
  }

  @Put()
  updateTask() {
    return 'Actualizando tareas'
  }

  @Delete()
  deleteTask() {
    return 'Eliminando tareas'
  }

  @Patch()
  updateTaskStatus() {
    return 'Actualizando tarea especifica'
  }
}
