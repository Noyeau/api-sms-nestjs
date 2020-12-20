import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("inbox")
export class inbox {

    @Column("timestamp",{ 
        nullable:false,
        default:"CURRENT_TIMESTAMP",
        name:"UpdatedInDB"
        })
    UpdatedInDB:Date;
        

    @Column("timestamp",{ 
        nullable:false,
        default:"0000-00-00 00:00:00",
        name:"ReceivingDateTime"
        })
    ReceivingDateTime:Date;
        

    @Column("text",{ 
        nullable:false,
        name:"Text"
        })
    Text:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:20,
        default:"",
        name:"SenderNumber"
        })
    SenderNumber:string;
        

    @Column("enum",{ 
        nullable:false,
        default:"Default_No_Compression",
        enum:["Default_No_Compression","Unicode_No_Compression","8bit","Default_Compression","Unicode_Compression"],
        name:"Coding"
        })
    Coding:string;
        

    @Column("text",{ 
        nullable:false,
        name:"UDH"
        })
    UDH:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:20,
        default:"",
        name:"SMSCNumber"
        })
    SMSCNumber:string;
        

    @Column("int",{ 
        nullable:false,
        default:"-1",
        name:"Class"
        })
    Class:number;
        

    @Column("text",{ 
        nullable:false,
        name:"TextDecoded"
        })
    TextDecoded:string;
        

    @PrimaryGeneratedColumn({ 
        name:"ID"
        })
    ID:number;
        

    @Column("text",{ 
        nullable:false,
        name:"RecipientID"
        })
    RecipientID:string;
        

    @Column("enum",{ 
        nullable:false,
        default:"false",
        enum:["false","true"],
        name:"Processed"
        })
    Processed:string;
        

    @Column("int",{ 
        nullable:false,
        default:"-1",
        name:"Status"
        })
    Status:number;
        
}
