import { ToolsService } from './tools.service';
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { Tool } from './tool.entity';
import { ToolDto } from './tool-dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('tools')
export class ToolsController {

    constructor(private toolService: ToolsService){}
  @Post()
  create(@Body() toolDto: ToolDto): Promise<Tool>  {
    return this.toolService.create(toolDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(): Promise<Tool[]>{
    return this.toolService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Tool> {

    return this.toolService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: number, @Body() toolDto: ToolDto): Promise<void> {

    return this.toolService.update(id,toolDto);
  
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.toolService.remove(id);
  
}


}
