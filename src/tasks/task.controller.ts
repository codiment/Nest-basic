import { Controller, Get } from "@nestjs/common";

@Controller({})

export class TaskController{
    @Get('/tasks')
    getAllTask(){
        return "All tasks"
    }
}
