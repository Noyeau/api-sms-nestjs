import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("outbox_multipart")
export class outbox_multipart {

    @Column("text",{ 
        nullable:true,
        name:"Text"
        })
    Text:string | null;
        

    @Column("enum",{ 
        nullable:false,
        default:"Default_No_Compression",
        enum:["Default_No_Compression","Unicode_No_Compression","8bit","Default_Compression","Unicode_Compression"],
        name:"Coding"
        })
    Coding:string;
        

    @Column("text",{ 
        nullable:true,
        name:"UDH"
        })
    UDH:string | null;
        

    @Column("int",{ 
        nullable:true,
        default:"-1",
        name:"Class"
        })
    Class:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"TextDecoded"
        })
    TextDecoded:string | null;
        

    @Column("int",{ 
        nullable:false,
        primary:true,
        default:"0",
        name:"ID"
        })
    ID:number;
        

    @Column("int",{ 
        nullable:false,
        primary:true,
        default:"1",
        name:"SequencePosition"
        })
    SequencePosition:number;
        

    @Column("enum",{ 
        nullable:false,
        default:"Reserved",
        enum:["SendingOK","SendingOKNoReport","SendingError","DeliveryOK","DeliveryFailed","DeliveryPending","DeliveryUnknown","Error","Reserved"],
        name:"Status"
        })
    Status:string;
        

    @Column("int",{ 
        nullable:false,
        default:"-1",
        name:"StatusCode"
        })
    StatusCode:number;
        
}
