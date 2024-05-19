import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrl: './sign-out.component.css'
})
export class SignOutComponent implements OnInit {

  constructor(private router:Router){}

  ngOnInit(): void {    
    localStorage.setItem("currentuser","Guest");
    //autorefresh
    alert("Logout!!");    
    window.location.href="/home";
  }
}
