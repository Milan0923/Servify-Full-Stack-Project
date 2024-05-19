import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CleanlinessInfo } from './Cleanlinessinfo';

@Component({
  selector: 'app-cleanliness',
  templateUrl: './cleanliness.component.html',
  styleUrl: './cleanliness.component.css'
})
export class CleanlinessComponent {
  url:string="http://localhost:5555/getAllNGOByName5/Pune";

  cnarr:CleanlinessInfo[]=[];
  found:boolean=false;

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    //fetching code using get method of REST API
    this.http.get<CleanlinessInfo[]>(this.url).subscribe(
      data=>{        
          this.cnarr=data;
          this.found=true;  
      },
      error=>{
        alert("Error Connecting Server")
        this.found=false;
      }
      );
}
}
