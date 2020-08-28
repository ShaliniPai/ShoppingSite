import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import {FurnitureDetailsComponent} from './furniture-details/furniture-details.component';

const routes: Routes = [
  {component: HomeScreenComponent , path: ''},
    {component: FurnitureDetailsComponent , path: 'details/:id' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
