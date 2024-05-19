import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import RouterModule, { Router } from  '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { CharityComponent } from './charity/charity.component';
import { DomestichelpComponent } from './domestichelp/domestichelp.component';
import { HealthcareComponent } from './healthcare/healthcare.component';
import { CampaignComponent } from './campaign/campaign.component';
import { WhatWeOfferComponent } from './what-we-offer/what-we-offer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MembersComponent } from './members/members.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EducationComponent } from './education/education.component';
import { FoodComponent } from './food/food.component';
import { ClothesComponent } from './clothes/clothes.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CleanlinessComponent } from './cleanliness/cleanliness.component';
import { PlantationComponent } from './plantation/plantation.component';
import { CityformComponent } from './cityform/cityform.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    LoginComponent,
    CharityComponent,
    DomestichelpComponent,
    HealthcareComponent,
    CampaignComponent,
    WhatWeOfferComponent,
    CarouselComponent,
    MembersComponent,
    RegisterComponent,
    EducationComponent,
    FoodComponent,
    ClothesComponent,
    SignOutComponent,
    FeedbackComponent,
    CleanlinessComponent,
    PlantationComponent,
    CityformComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
