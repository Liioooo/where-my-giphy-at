import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {TollComponent} from './components/toll/toll.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'toll',
    component: TollComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
