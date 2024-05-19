import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { registerInfo } from './registerInfo';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

  export class RegisterComponent {

    regform:FormGroup=new FormGroup({
      fullName:new FormControl("",Validators.required),
      email:new FormControl("",Validators.required),
      password:new FormControl("",Validators.required),
      contactNo:new FormControl("",Validators.required)
  });
  
  url:string="http://localhost:5555/adduser"; //baseurl of SpringBoot REST API

  //inject HttpClient using DI
  constructor(private http:HttpClient,private router:Router){
  }
  
  save(){
    //invoke REST API & post JSON 
    let newuser=this.regform.value;
    this.http.post(this.url,newuser).subscribe(
      data=>{
        // alert("Registration Successful!!"+data);    
        this.router.navigateByUrl("/login");},

      error=>{alert("Registration Failed!!"+error);});
  }
}


