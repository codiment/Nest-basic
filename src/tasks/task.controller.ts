import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTask(@Query() query: any) {
    console.log(query);
    return this.tasksService.getTasks();
  }

  @Get(':id')
  getTask(@Param('id') id: string) {
    console.log();
    return this.tasksService.getTaskById(parseInt(id));
  }

  @Post()
  createTask(@Body() task: CreateTaskDto) {
    return this.tasksService.createTask(task);
  }

  @Put()
  updateTask(@Body() task: UpdateTaskDto) {
    console.log(task);
    return 'Actualizando tareas';
  }

  @Delete()
  deleteTask() {
    return 'Eliminando tareas';
  }

  @Patch()
  updateTaskStatus() {
    return 'Actualizando tarea especifica';
  }
}
