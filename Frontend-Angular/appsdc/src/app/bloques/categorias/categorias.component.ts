import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  private formData: FormData = new FormData()

  constructor(
    private productoService: ProductoService,
    ) 
  {}

  listaPresentacion:any[] = []

  listaDisplayPresentacion: any[] = []

  ngOnInit(): void {

    this.mostrarPresentacion()
    this.listarPresentacion()
  }

  listarPresentacion(){

    this.formData.append('Categoria','');
    this.formData.append('Seccion','T');
    this.productoService.listarProductos(this.formData).subscribe(productos =>{
      this.listaPresentacion = Object.values(productos)[0]
    })
    this.formData.set('Categoria','');
    this.formData.set('Seccion','');
  }

  mostrarPresentacion(){
    this.formData.append('Categoria','');
    this.formData.append('Seccion','T');
    this.productoService.listarProductos(this.formData).subscribe(productos => {
      this.listaPresentacion = Object.values(productos)[0]; //-> [{},{},{},{}]
      console.log(this.listaPresentacion)
      for (let itemPresentacion of this.listaPresentacion){
        console.log(Object.values(itemPresentacion)[1])
        if(Object.values(itemPresentacion)[1] !== ''){
          this.listaDisplayPresentacion.push('contents')
        }else{
          this.listaDisplayPresentacion.push('none')
        }
      }
      console.log(this.listaDisplayPresentacion)
    })
    this.formData.set('Categoria','');
    this.formData.set('Seccion','');
  }

}
