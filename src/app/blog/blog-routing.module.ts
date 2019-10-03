import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogLeftsideComponent } from './blog-leftside/blog-leftside.component';


const routes: Routes = [
  {
    path: '',
    children: [

      {
        path: 'details',
        component: BlogDetailsComponent,
        data: {
          title: "Detail Blog | Tovo Landing Page"
        }
      },
      {
        path: 'left-sidebar',
        component: BlogLeftsideComponent,
        data: {
          title: "Left Sidebar | Tovo Landing Page"
        }
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
