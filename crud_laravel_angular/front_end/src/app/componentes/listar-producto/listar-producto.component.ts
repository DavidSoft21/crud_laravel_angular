import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/servicios/products.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {

  productos:any;

  constructor(private productService:ProductsService,private router:Router) { }

  ngOnInit(): void {
    this.productService.obtenerProducto().subscribe(respuesta => {
      this.productos = respuesta;
      console.log(respuesta);
    });
  }

  borrarProducto(id:any,iControl:any){

    if(window.confirm('¿Desea eliminar el registro?')){
      this.productService.borrarProducto({ 'id': id }).subscribe(respuesta => {
        console.log(respuesta);
        this.productos.splice(iControl, 1);
        this.router.navigateByUrl('/listar-producto');

      });

    }
    
    console.log(id+" "+iControl);
  }

}
