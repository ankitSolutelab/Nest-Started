import {Entity, Column ,PrimaryGeneratedColumn } from 'typeorm' ; //PrimaryGeneratedColumn 

@Entity('Task')
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name : string;

    @Column({default: false})
    complete : boolean;
}

// export interface Task{
//     id?: number;
//     name?: string;
//     complete ?: boolean;
// }