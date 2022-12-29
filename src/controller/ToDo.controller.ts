import {Body,Controller, Delete, Get, Post, Param, Put , Req} from '@nestjs/common';
//import {Request} from 'express';
import {ToDoInterface,TodoService} from 'src/provider/todo.provider';

interface CreateToDoDto{
    name: string,
    complete: boolean
}

@Controller('tasks')
export class ToDoController{
    constructor(private todoService: TodoService){}

    @Post()
    async create(@Body() createToDoDto: CreateToDoDto){
        const todo = await this.todoService.create(createToDoDto);
        if(!todo){
            return 'error in creatnig task'
        }
        return 'task created successfully'
    }

    @Get()
    async findAll(@Req()){
        const tasks : Array<ToDoInterface> = await this.todoService.findAll();
        return tasks;
    }

    @Get(':id')
    async findById(@Param('id')id:number){
        const task : ToDoInterface = await this.todoService.findById(id);
        return task;
    }
    @Put(':id')
    async update(@Param('id')id:number, @Body() body:any){
        const updated : any = await this.todoService.update(id,body);
        return 'task updated'
    }

    @Delete(':id')
    async remove(@Param('id')id:number){
        const deleted : any = await this.todoService.delete(id);
        return 'task deleted'
    }

}