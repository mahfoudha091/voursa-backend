import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { TagDto } from './tag-dto';
import { Tag } from './tag.entity';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
    constructor(private tagsService: TagsService){}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() tagDto: TagDto): Promise<Tag>  {
    return this.tagsService.create(tagDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(): Promise<Tag[]>{
    return this.tagsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Tag> {

    return this.tagsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: number, @Body() tagDto: TagDto): Promise<void> {

    return this.tagsService.update(id,tagDto);
  
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.tagsService.remove(id);
  
}


}
