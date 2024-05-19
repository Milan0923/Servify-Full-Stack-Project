import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cityform',
  templateUrl: './cityform.component.html',
  styleUrl: './cityform.component.css'
})
export class CityformComponent {
  constructor(private router:Router){  }

  submitForm(cityForm:NgForm){

//rest get
// this.router.navigateByUrl("/education/"+cityForm.controls['city'].value);


window.location.href=("/education/"+cityForm.controls['city'].value);
// window.location.href=("/clothes/"+cityForm.controls['city'].value);
// window.location.href=("/food/"+cityForm.controls['city'].value);
// window.location.href=("/Plantation/"+cityForm.controls['city'].value);
// window.location.href=("/Cleanliness/"+cityForm.controls['city'].value);

  }

}
