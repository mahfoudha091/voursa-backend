import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { TagDto } from './tag-dto';
import { Tag } from './tag.entity';

@Injectable()
export class TagsService {
    constructor(
        @InjectRepository(Tag)
        private tagRepository: Repository<Tag>,
    ){}

    async create(tagDto: TagDto): Promise<Tag>{
    //    const tag = new Tag()
    //    tag.name = tagDto.name;
       return await this.tagRepository.save(tagDto)
    }

    findAll(): Promise<Tag[]> {

        return this.tagRepository.find();
      }
    
    findOne(id: number): Promise<Tag> {

        return this.tagRepository.findOneBy({ id });
      }
    
    async update(id: number ,tagDto: TagDto): Promise<void> {
       let  newTagDto =  new Tag()
            newTagDto.name = tagDto.name;

            
        await this.tagRepository.update(id,newTagDto);
      
    }

    async remove(id: string): Promise<void> {
          await this.tagRepository.delete(id);
      
    }
}