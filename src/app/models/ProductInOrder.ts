import {ProductInfo} from "./productInfo";

export class ProductInOrder {
    id: string;
    titreProduit: string;
    prixProduit: number;
    productStock: number;
    descriptionProduit: string;
    imageFile: string;
    categorie: number;
    count: number;

    constructor(productInfo:ProductInfo, quantity = 1){
        this.id = productInfo.id;
        this.titreProduit = productInfo.titreProduit;
        this.prixProduit = productInfo.prixProduit;
        this.productStock = productInfo.productStock;
        this.descriptionProduit = productInfo.descriptionProduit;
        this.imageFile = productInfo.imageFile;
        this.categorie = productInfo.categorie;
        this.count = quantity;
    }
}
