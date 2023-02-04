import {Entity, BaseEntity, PrimaryGeneratedColumn, Column} from "typeorm"
@Entity({name:'tools'})
export class Tool extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @Column()
    description:string;

    @Column()
    price:number;

    // @Column()
    // user_id:number;

    // @Column()
    // tags:[];

    // @Column()
    // categories:[];

    // @Column()
    // images:[];

}
