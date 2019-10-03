import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PagesRoutingModule } from './pages-routing.module';
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
import { UserDetailComponent } from './user-edit/user-detail.component';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product.list.component';
import { DetailComponent } from './product-detail/detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { CardComponent } from './card/card.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderComponent } from './order/order.component';



@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    SignInComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    ThankYouComponent,
    ReviewComponent,
    ErrorPageComponent,
    FaqComponent,
    DownloadComponent,
    ComingsoonComponent,
    EmailTemplateComponent,
    UserDetailComponent,
    CartComponent,
    ProductListComponent,
    DetailComponent,
    ProductEditComponent,
    CardComponent,
    OrderDetailComponent,
    OrderComponent
   ]
})
export class PagesModule { }
