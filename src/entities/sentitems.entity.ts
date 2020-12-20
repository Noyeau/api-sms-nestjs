import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("sentitems")
@Index("sentitems_date",["DeliveryDateTime",])
@Index("sentitems_tpmr",["TPMR",])
@Index("sentitems_dest",["DestinationNumber",])
@Index("sentitems_sender",["SenderID",])
export class sentitems {

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
        

    @Column("timestamp",{ 
        nullable:true,
        name:"DeliveryDateTime"
        })
    DeliveryDateTime:Date | null;
        

    @Column("text",{ 
        nullable:false,
        name:"Text"
        })
    Text:string;
        

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
        

    @Column("int",{ 
        nullable:false,
        primary:true,
        default:"0",
        name:"ID"
        })
    ID:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:255,
        name:"SenderID"
        })
    SenderID:string;
        

    @Column("int",{ 
        nullable:false,
        primary:true,
        default:"1",
        name:"SequencePosition"
        })
    SequencePosition:number;
        

    @Column("enum",{ 
        nullable:false,
        default:"SendingOK",
        enum:["SendingOK","SendingOKNoReport","SendingError","DeliveryOK","DeliveryFailed","DeliveryPending","DeliveryUnknown","Error"],
        name:"Status"
        })
    Status:string;
        

    @Column("int",{ 
        nullable:false,
        default:"-1",
        name:"StatusError"
        })
    StatusError:number;
        

    @Column("int",{ 
        nullable:false,
        default:"-1",
        name:"TPMR"
        })
    TPMR:number;
        

    @Column("int",{ 
        nullable:false,
        default:"-1",
        name:"RelativeValidity"
        })
    RelativeValidity:number;
        

    @Column("text",{ 
        nullable:false,
        name:"CreatorID"
        })
    CreatorID:string;
        

    @Column("int",{ 
        nullable:false,
        default:"-1",
        name:"StatusCode"
        })
    StatusCode:number;
        
}
