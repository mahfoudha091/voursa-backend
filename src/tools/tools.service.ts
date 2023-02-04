import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Tool } from './tool.entity';
import { ToolDto } from './tool-dto';

@Injectable()
export class ToolsService {
    constructor(
        @InjectRepository(Tool)
        private toolRepository: Repository<Tool>,
    ){}

    async create(toolDto: ToolDto): Promise<Tool>{
    //    const tool = new Tool()
    //    tool.name = toolDto.name;
    //    tool.price = toolDto.price;
    //    tool.description = toolDto.description;
       return await this.toolRepository.save(toolDto)
    }

    findAll(): Promise<Tool[]> {

        return this.toolRepository.find();
      }
    
    findOne(id: number): Promise<Tool> {

        return this.toolRepository.findOneBy({ id });
      }
    
    async update(id: number ,toolDto: ToolDto): Promise<void> {
       let  newtoolDto =  new Tool()
            newtoolDto.name = toolDto.name;
            newtoolDto.price = toolDto.price;
            newtoolDto.description = toolDto.description;
            
        await this.toolRepository.update(id,newtoolDto);
      
    }

    async remove(id: string): Promise<void> {
          await this.toolRepository.delete(id);
      
    }
}
