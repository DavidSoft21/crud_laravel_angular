import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from './product';
import { environment } from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  api = environment.base ;

  constructor(private clientHttp: HttpClient) {


  }

  agregarProducto(productosfrm: ProductModel):Observable<any> {

    
    return this.clientHttp.post(this.api+'product_create',productosfrm);
  

  }

  obtenerProducto() {

    return this.clientHttp.get(this.api + 'product_index');

  }

  borrarProducto(id:any) {

    return this.clientHttp.post(this.api + 'product_delete',id);

  }

  editarProducto(id: any,frm:any) {

    return this.clientHttp.post(this.api + 'product_update/'+id, frm);

  }

  getProducto(id: any) {

    return this.clientHttp.post(this.api + 'product', {'id':id});

  }


}
