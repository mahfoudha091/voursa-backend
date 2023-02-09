import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Category } from './category.entity';
import { CategoryDto } from './category-dto';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(Category)
        private categoryRepository: Repository<Category>,
    ){}

    async create(categoryDto: CategoryDto): Promise<Category>{
    
       return await this.categoryRepository.save(categoryDto)
    }

    findAll(): Promise<Category[]> {

        return this.categoryRepository.find();
      }
    
    findOne(id: number): Promise<Category> {

        return this.categoryRepository.findOneBy({ id });
      }
    
    async update(id: number ,categoryDto: CategoryDto): Promise<void> {
       let  newCategoryDto =  new Category()
            newCategoryDto.name = categoryDto.name;

            
        await this.categoryRepository.update(id,newCategoryDto);
      
    }

    async remove(id: string): Promise<void> {
          await this.categoryRepository.delete(id);
      
    }
}