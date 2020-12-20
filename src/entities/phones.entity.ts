import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("phones")
export class phones {

    @Column("text",{ 
        nullable:false,
        name:"ID"
        })
    ID:string;
        

    @Column("timestamp",{ 
        nullable:false,
        default:"CURRENT_TIMESTAMP",
        name:"UpdatedInDB"
        })
    UpdatedInDB:Date;
        

    @Column("timestamp",{ 
        nullable:false,
        default:"0000-00-00 00:00:00",
        name:"InsertIntoDB"
        })
    InsertIntoDB:Date;
        

    @Column("timestamp",{ 
        nullable:false,
        default:"0000-00-00 00:00:00",
        name:"TimeOut"
        })
    TimeOut:Date;
        

    @Column("enum",{ 
        nullable:false,
        default:"no",
        enum:["yes","no"],
        name:"Send"
        })
    Send:string;
        

    @Column("enum",{ 
        nullable:false,
        default:"no",
        enum:["yes","no"],
        name:"Receive"
        })
    Receive:string;
        

    @Column("varchar",{ 
        nullable:false,
        primary:true,
        length:35,
        name:"IMEI"
        })
    IMEI:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:35,
        name:"IMSI"
        })
    IMSI:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:10,
        default:"ERROR",
        name:"NetCode"
        })
    NetCode:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:35,
        default:"ERROR",
        name:"NetName"
        })
    NetName:string | null;
        

    @Column("text",{ 
        nullable:false,
        name:"Client"
        })
    Client:string;
        

    @Column("int",{ 
        nullable:false,
        default:"-1",
        name:"Battery"
        })
    Battery:number;
        

    @Column("int",{ 
        nullable:false,
        default:"-1",
        name:"Signal"
        })
    Signal:number;
        

    @Column("int",{ 
        nullable:false,
        default:"0",
        name:"Sent"
        })
    Sent:number;
        

    @Column("int",{ 
        nullable:false,
        default:"0",
        name:"Received"
        })
    Received:number;
        
}
