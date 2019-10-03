import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../../shared/services/user.service";
import {ProductService} from "../../shared/services/product.service";
import {JwtResponse} from "../../jwtresponse/JwtResponse";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {CategoryType} from "../../enum/CategoryType";
import {ProductStatus} from "../../enum/ProductStatus";
import {ProductInfo} from "../../models/productInfo";
import {Role} from "../../enum/Role";

@Component({
    selector: 'app-product.list',
    templateUrl: './product.list.component.html',
    styleUrls: ['./product.list.component.css']
})


export class ProductListComponent implements OnInit, OnDestroy {

  productInfo: ProductInfo = {

    id:'',
    titreProduit: '',
    descriptionProduit: '',
    prixProduit: 0,
    imageFile: '',
    productStatus: 0,// 0: onsale 1: offsale
    categorie: 0,
    createTime: '',
    updateTime: '',
    productStock: 0

  }
  edit: boolean = false;

    constructor(private userService: UserService,
                private productService: ProductService,
                private route: ActivatedRoute) {
    }

    Role = Role;
    currentUser: JwtResponse;
    page: any;
    CategoryType = CategoryType;
    ProductStatus = ProductStatus;
    private querySub: Subscription;

    ngOnInit() {
        this.querySub = this.route.queryParams.subscribe(() => {
            this.getProds();
        });

        const param = this.route.snapshot.params;
        if(param.id) {
          this.productService.getProductInfo(param.id).subscribe(

            res => {

              this.productInfo = res;
              this.edit = true;
            }
          ),
           err => console.log(err);
    }
  }

    ngOnDestroy(): void {
        this.querySub.unsubscribe();
    }


    getProds() {
        this.productService.getProductInfos()
            .subscribe(page => {
                this.page = page['hydra:member'];
            });

    }

    deleteProduct(id: String) {

      this.productService.deleteProductInfo(id).subscribe(

        res => {

          this.getProds();
        },
        err => console.log(err)
      )
    }



}
