import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/users.entity';
import { createUserDto } from './dto/createUser.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>
    ){}

    getUsers(){
        return this.usersRepository.find({
            relations: ['task']
        });
    }

    getUser(id: number){
        return this.usersRepository.findOne({
            where: {id: id},
            relations: ['task']
        })
    }

    createUser(user: createUserDto){
        const newUser = this.usersRepository.create(user);
        return this.usersRepository.save(newUser);
    }
    
}
