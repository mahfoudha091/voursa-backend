import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CategoriesService } from './categories.service';
import { CategoryDto } from './category-dto';
import { Category } from './category.entity';

@Controller('categories')
export class CategoriesController {
    constructor(private categoriesService: CategoriesService){}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() categoryDto: CategoryDto): Promise<Category>  {
    return this.categoriesService.create(categoryDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(): Promise<Category[]>{
    return this.categoriesService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Category> {

    return this.categoriesService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: number, @Body() categoryDto: CategoryDto): Promise<void> {

    return this.categoriesService.update(id,categoryDto);
  
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.categoriesService.remove(id);
  
}


}
