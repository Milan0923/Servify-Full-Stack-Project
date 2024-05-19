import { Component, OnInit } from '@angular/core';
import { foodInfo } from './foodInfo';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrl: './food.component.css'
})
export class FoodComponent implements OnInit {
  myArray: string[] = [
    "https://www.justdial.com/Pune/Madhuban-Matimand-Va-Bahuviklang-Samajik-Sanstha",
    "https://matruchhayabalakashram.in/",
    "https://jeshtarithfoundation.com/",
    "https://www.aahwahan.com/"
  ]

  url:string="http://localhost:5555/getAllNGOByName2/Pune";

  farr:foodInfo[]=[];
  found:boolean=false;

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    //fetching code using get method of REST API
    this.http.get<foodInfo[]>(this.url).subscribe(
      data=>{        
          this.farr=data;
          this.found=true;
      },
      error=>{
        this.found=false;
      }
      );
}
}
