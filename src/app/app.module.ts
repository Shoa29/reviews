import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { FormComponent } from './form/form.component';
import { RatingsComponent } from './ratings/ratings.component';
import { Routes, RouterModule } from "@angular/router";
import {HttpClientModule} from '@angular/common/http';


const routes: Routes = [
  {
    path: 'feedbackform',
    component: FormComponent
  },
  {
    path:'',
    component: RatingsComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    RatingsComponent,
    AdminComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
