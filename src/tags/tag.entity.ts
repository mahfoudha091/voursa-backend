import { Tool } from "src/tools/tool.entity";
import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToMany} from "typeorm"
@Entity({name:'tags'})
export class Tag extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    name: string;

    @ManyToMany(() => Tool, (tool) => tool.tags)
    tools: Tool[]


}
