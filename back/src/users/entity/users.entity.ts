import { Task } from "src/tasks/entity/tasks.entity"
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: 'users'})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: false})
    name: string

    @CreateDateColumn({ type: 'timestamp' })
    createDate: Date

    @OneToMany(() => Task, (task) => task.user)
    task: []
}