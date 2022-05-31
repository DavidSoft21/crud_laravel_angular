import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductsService } from 'src/app/servicios/products.service';
import { ProductModel } from 'src/app/servicios/product';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  id:any;
  formularioProductos:FormGroup;
  product = new ProductModel();
  data:any;

  constructor(
    public formulario: FormBuilder,
    private activatedRoute:ActivatedRoute,
    private productServices:ProductsService,
    private router: Router

  ) { 

    this.id = activatedRoute.snapshot.paramMap.get('id');
    this.productServices.getProducto(this.id).subscribe(res =>{
      
      this.data = res;
      this.product = this.data;

      this.formularioProductos.setValue({

        //id: this.product.id,
        name: this.product.name,
        category: this.product.category,
        reference: this.product.reference,
        stock: this.product.stock,
        price: this.product.price

      });
      
    });
    this.formularioProductos = this.formulario.group({

      //id: [''],
      name: [''],
      category: [''],
      reference: [''],
      stock: [''],
      price: ['']

    });
    console.log(this.id);
    
  }
  
  ngOnInit(): void {
  }

  editarData(): any {
    console.log("submit");
    console.log(this.formularioProductos.value);
    this.productServices.editarProducto(this.id,this.formularioProductos.value).subscribe((res)=>{
      console.log(res);
      this.router.navigateByUrl('/listar-producto');
    });
 
  }

}
