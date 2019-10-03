import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { ReviewComponent } from './review/review.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FaqComponent } from './faq/faq.component';
import { DownloadComponent } from './download/download.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { EmailTemplateComponent } from './email-template/email-template.component';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product.list.component';
import { DetailComponent } from './product-detail/detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { AuthGuard } from '../_guards';
import { Role } from '../enum/Role';
import { CardComponent } from './card/card.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderComponent } from './order/order.component';
import { UserDetailComponent } from './user-edit/user-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'sign-in',
        component: SignInComponent,
        data: {
          title: "Sign-In | Tovo Landing Page"
        }
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
        data: {
          title: "Sign-Up | Tovo Landing Page"
        }
      },
      {
        path: 'forget-password',
        component: ForgetPasswordComponent,
        data: {
          title: "Forget-Password | Tovo Landing Page"
        }
      },
      {
        path: 'thank-you',
        component: ThankYouComponent,
        data: {
          title: "Thank you | Tovo Landing Page"
        }
      },
      {
        path: 'review',
        component: ReviewComponent,
        data: {
          title: "Review | Tovo Landing Page"
        }
      },
      {
        path: '404',
        component: ErrorPageComponent,
        data: {
          title: "404 | Tovo Landing Page"
        }
      },
      {
        path: 'faq',
        component: FaqComponent,
        data: {
          title: "FAQ | Tovo Landing Page"
        }
      },
      {
        path: 'download',
        component: DownloadComponent,
        data: {
          title: "Download | Tovo Landing Page"
        }
      },
      {
        path: 'coming-soon',
        component: ComingsoonComponent,
        data: {
          title: "Comming-Soon | Tovo Landing Page"
        }
      },
      {
        path: 'email-template',
        component: EmailTemplateComponent,
        data: {
          title: "Email-Template | Tovo Landing Page"
        }
      },
      {
        path: 'cart',
        component: CartComponent,
        data: {
          title: "Email-Template | Tovo Landing Page"
        }
      },
      {path: '', redirectTo: '/product', pathMatch: 'full'},
      {path: 'product/:id', component: DetailComponent},
      {path: 'category/:id', component: CardComponent},
      {path: 'product', component: CardComponent},
      {path: 'category', component: CardComponent},
      {path: 'cart', component: CartComponent},
      {path: 'success', component: SignUpComponent},
      {path: 'order/:id', component: OrderDetailComponent, canActivate: [AuthGuard]},
      {path: 'order', component: OrderComponent, canActivate: [AuthGuard]},
      {path: 'seller', redirectTo: 'seller/product', pathMatch: 'full'},
      {
          path: 'seller/product',
          component: ProductListComponent,
          canActivate: [AuthGuard],
          data: {roles: [Role.Manager, Role.Employee]}
      },
      {
          path: 'profile',
          component: UserDetailComponent,
          canActivate: [AuthGuard]
      },
      {
          path: 'seller/product/:id/edit',
          component: ProductEditComponent,
          canActivate: [AuthGuard],
          data: {roles: [Role.Manager, Role.Employee]}
      },
      {
          path: 'seller/product/:id/new',
          component: ProductEditComponent,
          canActivate: [AuthGuard],
          data: {roles: [Role.Employee]}
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
