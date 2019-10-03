import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeOneComponent } from './versions/home-one/home-one.component';


// Routes
const routes: Routes = [
  {
    path: 'one',
    component: HomeOneComponent,
    data: {
      title: "Demo 1 | Angular Universal",
      content:"Demo1 | Theme with SSR Integration"
    }
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
