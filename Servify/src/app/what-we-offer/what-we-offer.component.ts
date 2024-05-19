import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-what-we-offer',
  templateUrl: './what-we-offer.component.html',
  styleUrl: './what-we-offer.component.css'
})
export class WhatWeOfferComponent implements OnInit {
  
  constructor(private router:Router){}

  ngOnInit(): void {
    if (localStorage.getItem("currentuser")=="Guest") {
      alert("Login to continue...");
      //autorefresh
      window.location.href="/login";
      // this.router.navigateByUrl("/login");
    }
    else{this.router.navigateByUrl("/what-we-offer");}
  }
}
