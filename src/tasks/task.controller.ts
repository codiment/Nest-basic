import { Body, Controller, Delete, Get, Patch, Post, Put, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TaskController {

  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTask(@Query() query: any) {
    console.log(query)
    return this.tasksService.getTasks();
  }

  @Post()
  createTask(@Body() task : any) {
    console.log(task)
    return this.tasksService.createTask(task)
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
