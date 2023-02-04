import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UserDto } from './user-dto';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ){}

    async create(userDto: UserDto): Promise<User>{
    //    const user = new User()
    //    user.name = userDto.name;
    //    user.email = userDto.email;
    //    user.adress = userDto.adress;
    //    user.phone = userDto.phone;
       return await this.userRepository.save(userDto)
    }

    findAll(): Promise<User[]> {

        return this.userRepository.find();
      }
    
    findOne(id: number): Promise<User> {

        return this.userRepository.findOneBy({ id });
      }
    
    async update(id: number ,userDto: UserDto): Promise<void> {
       let  newUserDto =  new User()
            newUserDto.name = userDto.name;
            newUserDto.email = userDto.email;
            newUserDto.adress = userDto.adress;
            newUserDto.phone = userDto.phone;
            
        await this.userRepository.update(id,newUserDto);
      
    }

    async remove(id: string): Promise<void> {
          await this.userRepository.delete(id);
      
    }

}
