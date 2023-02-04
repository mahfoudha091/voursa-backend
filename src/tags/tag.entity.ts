import {Entity, BaseEntity, PrimaryGeneratedColumn, Column} from "typeorm"
@Entity({name:'tags'})
export class Tag extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    name: string;


}
