import { Component, OnInit } from '@angular/core';
import { EducationInfo } from './EducationInfo';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent  {
  myArray: string[] = [
    "https://www.pmc.gov.in/en?main=marathi",
    "https://www.caringhands.org.in/",
    "https://www.theajitfoundation.org/",
    "https://snehashrayafoundation.org/"
  ]

  url:string="http://localhost:5555/getAllNGOByName3";

  earr:EducationInfo[]=[];
  found:boolean=false;
  cty:string="";

  constructor(private http:HttpClient,private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
     //fetching code using get method of REST API
     this.activatedRoute.params.subscribe(params => {
       this.cty = params['cty'];
      // alert("city="+this.cty);
      });
     
  this.http.get<EducationInfo[]>(this.url+"/"+this.cty).subscribe(
    data=>{        
        this.earr=data;
        this.found=true;  
    },
    error=>{
      alert("Error Connecting Server")
      this.found=false;
    }
    );
}
}
