import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

export class TaskService {
  
  constructor(
    @InjectRepository(Task) private taskReposritory:Repository<Task>
  ){}

  create(createTaskDto: CreateTaskDto) {
    const newTask = this.taskReposritory.create(createTaskDto);
    return this.taskReposritory.save(newTask);
  }

  findAll() {
    return this.taskReposritory.find();
  }

  // --------------------------------------

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
