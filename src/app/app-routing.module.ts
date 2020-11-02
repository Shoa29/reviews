import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { RatingsComponent } from './ratings/ratings.component';

const routes: Routes = [
  {
    path: 'feedbackform',
    component: FormComponent
  },
  {
    path: '',
    component: RatingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
