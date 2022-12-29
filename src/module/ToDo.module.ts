import { Module } from '@nestjs/common';
//import { TypeOrmModule } from '@nestjs/typeorm/dist';
//import { ToDo } from 'src/entity/ToDoEntity';
import { ToDoController } from 'src/controller/ToDo.controller';
import { TodoService } from 'src/provider/todo.provider';

@Module({
    controllers:[ToDoController],
    providers:[TodoService],
})

export class ToDoModule {}
