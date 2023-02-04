import {Entity, BaseEntity, PrimaryGeneratedColumn, Column} from "typeorm"
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

    

}
