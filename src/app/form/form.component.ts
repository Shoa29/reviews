import { Component, OnInit } from '@angular/core';
import { NgForm, ReactiveFormsModule, Form } from '@angular/forms';
import {  FormGroup, FormControl, FormBuilder, Validators  } from '@angular/forms';

import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  fbForm: FormGroup;
  rating:number;
  obj:UserReview;
  date:string;
  day:string;
  month:string;
  year:string;
  constructor(private fb: FormBuilder, private http:HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.fbForm = this.fb.group({
      userName: ['', Validators.required],
      contact: ['', Validators.required],
      city:[''],
      country:[''],
      smlink:[''],
      feedback: ['']
    });
  }
  rateFive(){
    this.rating = 5;
  }
  rateFour(){
    this.rating = 4;
  }
  rateThree(){
    this.rating = 3;
  }
  rateTwo(){
    this.rating=2;
  }
  rateOne(){
    this.rating = 1;
  }
  createDate(){
    var numday = new Date().getDate();
    this.day = numday.toString();
    numday = new Date().getMonth();
    this.month = numday.toString();
    numday = new Date().getFullYear();
    this.year = numday.toString();
    this.date = this.day + "/" + this.month + "/" + this.year;
    return this.date;
  }
  submit(form: NgForm){
    this.date = this.createDate();
    var verbool = true;
    if(!form.valid){
      return;
    }
    console.log(form.value.city);
    this.obj = {
      userName:form.value.name,
      rating:this.rating,
      url:form.value.smlink,
      date:this.date,
      city:form.value.city,
      country:form.value.country,
      verified:verbool,
      feedback:form.value.feedback,

    }
    console.log(this.obj);
    this.http.post('http://localhost:8080/api/saveReview', this.obj).subscribe(resData =>{
      console.log(resData);
    });
    this.router.navigate(['/']);
    form.reset();
  }

}
interface UserReview{
  rating:number;
  userName:string;
  url?:string;
  city?:string;
  country?:string;
  feedback?:string;
  verified?:boolean;
  date:String;
  dp?: File;

}
