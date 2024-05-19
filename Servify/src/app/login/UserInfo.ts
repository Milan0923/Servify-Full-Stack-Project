export class UserInfo{
    email:string;
    password:string;
    fullName:string;
    constructor(em:string,ps:string,pn:string){
        this.email=em;
        this.password=ps;
        this.fullName=pn;
    }
}