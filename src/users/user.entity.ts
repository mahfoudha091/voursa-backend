import { Tool } from "src/tools/tool.entity";
import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm"
@Entity({name:'users'})
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @Column()
    email:string;

    @Column()
    password:string;

    @Column()
    adress:string;

    @Column()
    phone:string;

    @OneToMany(type => Tool, tool => tool.user)
    tools: Tool[];

    

}
