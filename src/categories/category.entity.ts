import { Tool } from "src/tools/tool.entity";
import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToMany} from "typeorm"
@Entity({name:'categories'})
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    name: string;

    @ManyToMany(() => Tool, (tool) => tool.categories)
    tools: Tool[]


}
