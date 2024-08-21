import { HttpCode, HttpException, HttpStatus, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entity/tasks.entity';
import { User } from 'src/users/entity/users.entity';
import { CreateTaskDto } from './dto/task.dto';
import { UpdateTask } from './dto/update.dto';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>,
        @InjectRepository(Task) private tasksRepository: Repository<Task>
    ){}

    getTasks(){
        return this.tasksRepository.find();
    }

    async createTask(userId: number, task: CreateTaskDto){
        const userFound = await this.usersRepository.findOne({where: {id: userId}})
        if(!userFound){
            console.log(userFound);
            return new HttpException('user not found', HttpStatus.NOT_FOUND);
        }
        const newTask = this.tasksRepository.create({
            ...task,
            user: userFound
        });
        return await this.tasksRepository.save(newTask)
    }

    async deleteTask(taskId: number){
        const taskFound = await this.tasksRepository.findOne({where: {id: taskId}})
        if(!taskFound){
            return new HttpException('task not found', HttpStatus.NOT_FOUND);
        }
        return await this.tasksRepository.remove(taskFound);
    }

    async updateTask(taskId: number, upDateTask: UpdateTask){
        const taskFound = await this.tasksRepository.findOne({where: {id: taskId}});

        if(!taskFound){
            return new HttpException('task dont exist', HttpStatus.NOT_FOUND);
        }

        return this.tasksRepository.update(taskId, upDateTask)
    }

}
