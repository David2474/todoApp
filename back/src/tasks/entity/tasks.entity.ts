import { User } from "src/users/entity/users.entity";
import { Entity, CreateDateColumn, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn,  } from "typeorm";

@Entity({name: 'tasks'})
export class Task {
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: false})
    title: string

    @Column()
    description: string

    @CreateDateColumn({ type: 'timestamp' })
    createTask: Date

    @ManyToOne(() => User, (user) => user.task)
    user: User
}