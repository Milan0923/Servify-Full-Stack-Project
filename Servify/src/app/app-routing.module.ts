import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharityComponent } from './charity/charity.component';
import { HomeComponent } from './home/home.component';
// import { ServiceComponent } from './service/service.component';
import { ContactusComponent } from './contactus/contactus.component';
import { WhatWeOfferComponent } from './what-we-offer/what-we-offer.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { CampaignComponent } from './campaign/campaign.component';
import { HealthcareComponent } from './healthcare/healthcare.component';
import { RegisterComponent } from './register/register.component';
import { EducationComponent } from './education/education.component';
import { FoodComponent } from './food/food.component';
import { ClothesComponent } from './clothes/clothes.component';
import { DomestichelpComponent } from './domestichelp/domestichelp.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PlantationComponent } from './plantation/plantation.component';
import { CleanlinessComponent } from './cleanliness/cleanliness.component';
import { CityformComponent } from './cityform/cityform.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:'carousel',component:CarouselComponent},
  {path:"what-we-offer",component:WhatWeOfferComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"login",component:LoginComponent},
  {path:"members",component:MembersComponent},
  {path:'campaign', component: CampaignComponent },
  {path:'domestichelp',component: DomestichelpComponent },
  {path:'charity',component: CharityComponent },
  {path:'healthcare',component: HealthcareComponent },
  {path:'charity',component: CharityComponent },
  {path:'register',component:RegisterComponent},
  {path:'education/:cty',component:EducationComponent},
  {path:'food',component:FoodComponent},
  {path:'clothes',component:ClothesComponent},
  {path:'sign-out',component:SignOutComponent},
  {path:'Feedback',component:FeedbackComponent},
  {path:'Plantation/:cty',component:PlantationComponent},
  {path:'Cleanliness',component:CleanlinessComponent},
  {path:'citycomp',component:CityformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
