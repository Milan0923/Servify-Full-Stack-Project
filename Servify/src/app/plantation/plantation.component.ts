import { Component } from '@angular/core';
import { PlantationInfo } from './PlantationInfo';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plantation',
  templateUrl: './plantation.component.html',
  styleUrl: './plantation.component.css'
})
export class PlantationComponent {
  url:string="http://localhost:5555/getAllNGOByName4";

  parr:PlantationInfo[]=[];
  found:boolean=false;
  cty:string="";
  constructor(private http:HttpClient,private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.cty = params['cty'];
     // alert("city="+this.cty);
     });
    //fetching code using get method of REST API
    this.http.get<PlantationInfo[]>(this.url+"/"+this.cty).subscribe(
      data=>{        
          this.parr=data;
          this.found=true;  
      },
      error=>{
        alert("Error Connecting Server");
        this.found=false;
      }
      );
}
}
