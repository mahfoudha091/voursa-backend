import { ToolsService } from './tools.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Tool } from './tool.entity';
import { ToolDto } from './tool-dto';

@Controller('tools')
export class ToolsController {

    constructor(private toolService: ToolsService){}
  @Post()
  create(@Body() toolDto: ToolDto): Promise<Tool>  {
    return this.toolService.create(toolDto);
  }

  @Get()
  findAll(): Promise<Tool[]>{
    return this.toolService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Tool> {

    return this.toolService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() toolDto: ToolDto): Promise<void> {

    return this.toolService.update(id,toolDto);
  
  }
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.toolService.remove(id);
  
}


}
