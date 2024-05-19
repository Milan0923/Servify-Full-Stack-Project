export class registerInfo{
    email:string;
    password:string;
    contactNo:string;
    fullName:string;
    
    constructor(em:string,ps:string,cn:string,pn:string){
        this.email=em;
        this.password=ps;
        this.contactNo=cn;
        this.fullName=pn;
    }
}