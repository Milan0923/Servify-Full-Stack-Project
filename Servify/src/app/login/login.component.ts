import { Component } from '@angular/core';
import { UserInfo } from './UserInfo';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  
  url:string="http://localhost:5555/validateuser";

  constructor(private http:HttpClient,private router:Router){}

  validateuser(loginform:NgForm){
    //invoke REST API
    let em:string=loginform.controls["email"].value;
    let ps:string=loginform.controls["password"].value;
    this.http.get<UserInfo>(this.url+"/"+em+"/"+ps).subscribe(
      data=>{        
        let temp:UserInfo=data;
        if(temp!=null)
        {
          // alert("Login Success!!"+temp);          
          localStorage.setItem("currentuser",temp.fullName);
          
          // this.router.navigateByUrl("/what-we-offer");
          //autorefresh
          window.location.href="/what-we-offer";
         
        }
        else
          alert("Incorrect Credentials"+temp);
         
          
      },
      err=>{
        alert("Error Connecting Server"+err);
      }
      );

    
  
  }
}
