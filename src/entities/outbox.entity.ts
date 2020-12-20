import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("outbox")
@Index("outbox_date",["SendingDateTime","SendingTimeOut",])
@Index("outbox_sender",["SenderID",])
export class outbox {

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
        name:"SendingDateTime"
        })
    SendingDateTime:Date;
        

    @Column("time",{ 
        nullable:false,
        default:"23:59:59",
        name:"SendBefore"
        })
    SendBefore:string;
        

    @Column("time",{ 
        nullable:false,
        default:"00:00:00",
        name:"SendAfter"
        })
    SendAfter:string;
        

    @Column("text",{ 
        nullable:true,
        name:"Text"
        })
    Text:string | null;
        

    @Column("varchar",{ 
        nullable:false,
        length:20,
        default:"",
        name:"DestinationNumber"
        })
    DestinationNumber:string;
        

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
        nullable:false,
        name:"TextDecoded"
        })
    TextDecoded:string;
        

    @PrimaryGeneratedColumn({ 
        name:"ID"
        })
    ID:number;
        

    @Column("enum",{ 
        nullable:true,
        default:"false",
        enum:["false","true"],
        name:"MultiPart"
        })
    MultiPart:string | null;
        

    @Column("int",{ 
        nullable:true,
        default:"-1",
        name:"RelativeValidity"
        })
    RelativeValidity:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"SenderID"
        })
    SenderID:string | null;
        

    @Column("timestamp",{ 
        nullable:true,
        default:"0000-00-00 00:00:00",
        name:"SendingTimeOut"
        })
    SendingTimeOut:Date | null;
        

    @Column("enum",{ 
        nullable:true,
        default:"default",
        enum:["default","yes","no"],
        name:"DeliveryReport"
        })
    DeliveryReport:string | null;
        

    @Column("text",{ 
        name:"CreatorID"
        })
    CreatorID:string;
        

    @Column("int",{ 
        nullable:true,
        default:"0",
        name:"Retries"
        })
    Retries:number | null;
        

    @Column("int",{ 
        nullable:true,
        default:"0",
        name:"Priority"
        })
    Priority:number | null;
        

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
