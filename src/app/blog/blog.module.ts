import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';

import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogLeftsideComponent } from './blog-leftside/blog-leftside.component';



@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  declarations: [

    BlogDetailsComponent,
    BlogLeftsideComponent,


  ]
})
export class BlogModule { }
