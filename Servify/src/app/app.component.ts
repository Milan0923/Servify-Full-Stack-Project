import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  title = 'servify';
  currentuser=localStorage.getItem("currentuser");
  islogin:boolean=false;
  
  ngOnInit(): void {
    if (localStorage.getItem("currentuser")==null) {
      //create a key in in localstorage for the first time
      localStorage.setItem("currentuser","Guest");
    }
    //toggle signIn and signOut links
    if (localStorage.getItem("currentuser")=="Guest")
      this.islogin=false;
    else
      this.islogin=true;
  }

}
