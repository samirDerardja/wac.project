import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {ProductInfo} from '../../models/productInfo';


@Injectable({
    providedIn: 'root'
})
export class ProductService {


  API_URI = 'http://127.0.0.1:8000';
  private categoryUrl = `${this.API_URI}/categories`;


  constructor(private http: HttpClient) { }

  getProductInfos(): Observable<ProductInfo[]>{

    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))
   });
    return this.http.get<ProductInfo[]>(`${this.API_URI}/api/produits`, {headers : reqHeader}).pipe(map((res: ProductInfo[]) => {


      return res;
    }));
  }

  getProductInfo(id: String): Observable<ProductInfo>{

    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))
   });
    return this.http.get(`${this.API_URI}` +id , {headers : reqHeader}).pipe(map((res: ProductInfo) => {
      return res;
    }))
  }

  deleteProductInfo(id: String) {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))
   });
    return this.http.delete(`${this.API_URI}`+id , {headers : reqHeader} );
  }


  saveProductInfo(ProductInfo: ProductInfo): Observable<ProductInfo> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))
   });
    return this.http.post<ProductInfo>(`${this.API_URI}/api/ProductInfos`, ProductInfo, {headers: reqHeader})

  }

  updateProductInfo(id:string | number, updateProductInfo: ProductInfo): Observable<ProductInfo> {

    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))
   });
    return this.http.put<ProductInfo>(`${this.API_URI}` +id , updateProductInfo, {headers: reqHeader});
  }

  getCategoryInPage(categoryType: number, page: number, size: number): Observable<any> {
    const url = `${this.categoryUrl}/${categoryType}?page=${page}&size=${size}`;
    return this.http.get(url).pipe(
        // tap(data => console.log(data))
    );
}

update(productInfo: ProductInfo): Observable<ProductInfo> {
  const url = `${this.API_URI}/seller/product/${productInfo.id}/edit`;
  return this.http.put<ProductInfo>(url, productInfo);
}

create(productInfo: ProductInfo): Observable<ProductInfo> {
  const url = `${this.API_URI}/seller/product/new`;
  return this.http.post<ProductInfo>(url, productInfo);
}



    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
