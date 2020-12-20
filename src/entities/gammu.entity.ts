import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("gammu")
export class gammu {

    @Column("int",{ 
        nullable:false,
        primary:true,
        default:"0",
        name:"Version"
        })
    Version:number;
        
}
