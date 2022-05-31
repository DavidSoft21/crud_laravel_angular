import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { ProductsService } from 'src/app/servicios/products.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  formularioProductos:FormGroup;

  constructor( 
    public formulario:FormBuilder,
    private productservice: ProductsService, 
    private router: Router
    
    ) { 
    
    this.formularioProductos = this.formulario.group({
      
      name:[''],
      category:[''],
      reference:[''],
      stock:[''],
      price:['']

    });

  }

  ngOnInit(): void {

  }

  enviarData():any{
    console.log("submit");
    console.log(this.formularioProductos.value);
    this.productservice.agregarProducto(this.formularioProductos.value).subscribe(()=>{
      this.router.navigateByUrl('/listar-producto');
    });

  }

}
