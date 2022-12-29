import {Body, Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/entity/ToDoEntity';
import { Repository } from 'typeorm';

export interface ToDoInterface{
    name : string,
    complete : boolean,
}

@Injectable()
export class TodoService{
    constructor(
        @InjectRepository(Task)
        private todoRepository: Repository<ToDoInterface>
    ){}
    //private readonly tasks: Task[];

    create(todo:ToDoInterface):Promise<ToDoInterface>{
        return this.todoRepository.save(
            this.todoRepository.create(todo);
        );
    }
    findAll():Promise<ToDoInterface[]>{
        return this.todoRepository.find();
    }

    findById(id:number):Promise<ToDoInterface>{
        return this.todoRepository.createQueryBuilder().select().where('id=:id',{id}).execute();
    }

    update(id:number,data:any):Promise<any>{
        return this.todoRepository.createQueryBuilder().update().set({
            name:data.name, complete:data.complete
        }).where('id = :id',{id}).execute();
    }

    delete(id: number):Promise<any>{
        return this.todoRepository.createQueryBuilder().delete().from(ToDo).where('id = :id',{id}).execute();
    }
}
