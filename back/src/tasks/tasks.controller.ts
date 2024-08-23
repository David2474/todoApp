import { Body, Controller, Post, Get, Param, ParseIntPipe, Delete, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/task.dto';
import { UpdateTask } from './dto/update.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getTask(){
    return this.tasksService.getTasks()
  }

  @Post(':id')
  createTask(
  @Param('id', ParseIntPipe) userId: number,
  @Body() task: CreateTaskDto){
    return this.tasksService.createTask(userId, task);
  }

  @Delete(':id')
  deleteTask(@Param('id', ParseIntPipe) taskId: number){
    return this.tasksService.deleteTask(taskId);
  }

  @Patch(':id')
  updateTask(
    @Param('id', ParseIntPipe) taskId: number,
    @Body() newTask: UpdateTask
  ){
    return this.tasksService.updateTask(taskId, newTask);
  }

}