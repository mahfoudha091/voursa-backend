import { Category } from "src/categories/category.entity";
import { Tag } from "src/tags/tag.entity";
import { User } from "src/users/user.entity";
import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable} from "typeorm"
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

    @ManyToOne(() => User, (user) => user.tools)
    user: User

    @ManyToMany(() => Tag, (tag) => tag.tools)
    @JoinTable()
    tags: Tag[]

    @ManyToMany(() => Category, (category) => category.tools)
    @JoinTable()
    categories: Category[]

    // @Column()
    // images:[];

}
