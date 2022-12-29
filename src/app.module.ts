import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { ToDoController } from './controller/ToDo.controller';
import { ToDoModule } from './module/todo.module';

@Module({
  imports: [ToDoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
