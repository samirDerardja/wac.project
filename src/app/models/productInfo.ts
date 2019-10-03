import {ProductInOrder} from "./ProductInOrder";

export class ProductInfo {
    id: string;
    titreProduit: string;
    prixProduit: number;
    productStock: number;
    descriptionProduit: string;
    imageFile: string;
    productStatus: number; // 0: onsale 1: offsale
    categorie: number;
    createTime: string;
    updateTime: string;


    constructor(productInOrder?: ProductInOrder) {
        if (productInOrder) {
            this.id = productInOrder.id;
            this.titreProduit = productInOrder.titreProduit;
            this.prixProduit = productInOrder.prixProduit;
            this.productStock = productInOrder.productStock;
            this.descriptionProduit = productInOrder.descriptionProduit;
            this.imageFile = productInOrder.imageFile;
            this.categorie = productInOrder.categorie;
            this.productStatus = 0;
        } else {
            this.id = '';
            this.titreProduit = '';
            this.prixProduit = 20;
            this.productStock = 100;
            this.descriptionProduit = '';
            this.imageFile = '';
            this.categorie = 0;
            this.productStatus = 0;
        }
    }
}

