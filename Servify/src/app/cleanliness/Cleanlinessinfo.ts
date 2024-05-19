export class CleanlinessInfo{
    ngoId:number;
    cityName:string;
    ngoName:string;
    contactNumber:number;

    constructor(ngid:number,cnm:string,ngnm:string,contno:number){
        this.ngoId=ngid;
        this.cityName=cnm;
        this.ngoName=ngnm;
        this.contactNumber=contno;
    }
}