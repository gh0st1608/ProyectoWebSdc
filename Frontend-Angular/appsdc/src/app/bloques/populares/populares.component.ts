import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-populares',
  templateUrl: './populares.component.html',
  styleUrls: ['./populares.component.css']
})
export class PopularesComponent implements OnInit {

  private formData: FormData = new FormData()

  constructor(
    private productoService: ProductoService,
    ) 
  {}

  listaPopulares:any[] = []

  listaDisplayPopulares: any[] = []

  ngOnInit(): void {

    this.mostrarPopulares()
    this.listarPopulares()
  }

  listarPopulares(){

    this.formData.append('Categoria','');
    this.formData.append('Seccion','P');
    this.productoService.listarProductos(this.formData).subscribe(productos =>{
      this.listaPopulares = Object.values(productos)[0]
    })
    this.formData.set('Categoria','');
    this.formData.set('Seccion','');
  }

  mostrarPopulares(){
    this.formData.append('Categoria','');
    this.formData.append('Seccion','P');
    this.productoService.listarProductos(this.formData).subscribe(productos => {
      this.listaPopulares = Object.values(productos)[0]; //-> [{},{},{},{}]
      console.log(this.listaPopulares)
      for (let itemPopular of this.listaPopulares){
        console.log(Object.values(itemPopular)[1])
        if(Object.values(itemPopular)[1] !== ''){
          this.listaDisplayPopulares.push('contents')
        }else{
          this.listaDisplayPopulares.push('none')
        }
      }
      console.log(this.listaDisplayPopulares)
    })
    this.formData.set('Categoria','');
    this.formData.set('Seccion','');
  }

}
