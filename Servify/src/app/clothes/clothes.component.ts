import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { clothesInfo } from './clothesInfo';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrl: './clothes.component.css'
})
export class ClothesComponent implements OnInit {
   myArray: string[] = [
    "https://www.justdial.com/Pune/Manas-Old-Age-Home-Near-Hotel-Patilwada-Sanaswadi/020PXX20-XX20-240106163424-A5C9_BZDET",
    "https://www.justdial.com/Pune/Goodwill-INDIA-Shivane-Khadakwasla/020PXX20-XX20-150817191626-C1T1_BZDET",
    "https://jeshtarithfoundation.com/about/",
    "https://www.theajitfoundation.org/",
    "https://varafoundations.org/",
    "https://psmngo.org/",
    "https://srisaisnehafoundation.org/",
    "https://www.justdial.com/Bangalore/Sukanksha-Charitable-Trust-Kadabagere/080PXX80-XX80-180824200727-T3U2_BZDET"];

  url:string="http://localhost:5555/getAllNGOByName1/Pune";

  carr:clothesInfo[]=[];
  found:boolean=false;

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    //fetching code using get method of REST API
    this.http.get<clothesInfo[]>(this.url).subscribe(
      data=>{        
          this.carr=data;
          this.found=true;
      },
      error=>{
        alert("Error Connecting Server")
        this.found=false;
      }
      );
}
}
