import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { CategoriaService } from '../../services/categoria.service';





@Component({
  selector: 'app-carta', 
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']  
})
export class CartaComponent implements OnInit{

  private formData: FormData = new FormData()

  constructor(
    private productoService: ProductoService,
    private categoriaService: CategoriaService,
    ) 
  {}
 
  //arrayProductos:any[] = [];
  arrayArroces:any[] = [];
  arrayCarnes:any[] = [];
  arrayCausas:any[] = [];
  arrayCeviches:any[] = [];
  arrayChicharrones:any[] = [];
  arrayEspeciales:any[] = [];
  arrayJugosos:any[] = [];
  arrayLicores:any[] = [];
  arrayPastas:any[] = [];
  arrayPostres:any[] = [];
  arrayTiraditos:any[] = [];

  
  
  //listaCategorias!:any[];
  nombreCategoria!:any
  listaProductos!:any[];
  listaCategorias:any[]=[];
  listaDisplayCategorias:string[] = [];


  //displayProductos
  listaDisplayArroces:string[] = [];
  listaDisplayCarnes:string[] = [];
  listaDisplayCausas:string[] = [];
  listaDisplayCeviches:string[] = [];
  listaDisplayChicharrones:string[] = [];
  listaDisplayEspeciales:string[] = [];
  listaDisplayJugosos:string[] = [];
  listaDisplayLicores:string[] = [];
  listaDisplayPastas:string[] = [];
  listaDisplayPostres:string[] = [];
  listaDisplayTiraditos:string[] = [];

  ngOnInit():void{  
    


    
    this.listarCategorias()
    this.listarProductos()
    this.mostrarCategorias()
    this.refrescarCategoria()
  
    
  }

  refrescarCategoria(){
    this.formData.set('ItemCategoria','');
  }


  listarProductos(){
    this.categoriaService.listarCategorias().subscribe(categorias=>{
      this.listaCategorias = Object.values(categorias)[0]
      for (let categoria of this.listaCategorias){
        this.nombreCategoria = Object.values(categoria)[1]
        this.formData.append('ItemCategoria',this.nombreCategoria);
        this.formData.append('Seccion','C');
        this.productoService.listarProductos(this.formData).subscribe(productos =>{
          this.listaProductos = Object.values(productos)[0]
          console.log("Lista Producto" + this.listaProductos)
          for (let producto of this.listaProductos){
            switch (producto.Categoria){
              case 'Arroces':
                this.arrayArroces.push(producto);
                  if(producto.Nombre == ''){
                    this.listaDisplayArroces.push('none')
                  }else{
                    this.listaDisplayArroces.push('contents')
                  }
                break
              case 'Carnes':
                this.arrayCarnes.push(producto);
                if(producto.Nombre == ''){
                  this.listaDisplayCarnes.push('none')
                }else{
                  this.listaDisplayCarnes.push('contents')
                }
                break
              case 'Causas':
                this.arrayCausas.push(producto);
                if(producto.Nombre == ''){
                  this.listaDisplayCausas.push('none')
                }else{
                  this.listaDisplayCausas.push('contents')
                }
                break
              case 'Ceviches':
                this.arrayCeviches.push(producto);
                if(producto.Nombre == ''){
                  this.listaDisplayCeviches.push('none')
                }else{
                  this.listaDisplayCeviches.push('contents')
                }
                break
              case 'Chicharrones':
                this.arrayChicharrones.push(producto);
                if(producto.Nombre == ''){
                  this.listaDisplayChicharrones.push('none')
                }else{
                  this.listaDisplayChicharrones.push('contents')
                }
                break
              case 'Especiales':
                this.arrayEspeciales.push(producto);
                if(producto.Nombre == ''){
                  this.listaDisplayEspeciales.push('none')
                }else{
                  this.listaDisplayEspeciales.push('contents')
                }
                break
              case 'Jugosos':
                this.arrayJugosos.push(producto);
                if(producto.Nombre == ''){
                  this.listaDisplayJugosos.push('none')
                }else{
                  this.listaDisplayJugosos.push('contents')
                }
                break
              case 'Licores':
                this.arrayLicores.push(producto);
                if(producto.Nombre == ''){
                  this.listaDisplayLicores.push('none')
                }else{
                  this.listaDisplayLicores.push('contents')
                }
                break
              case 'Pastas':
                this.arrayPastas.push(producto);
                if(producto.Nombre == ''){
                  this.listaDisplayPastas.push('none')
                }else{
                  this.listaDisplayPastas.push('contents')
                }
                break
              case 'Postres':
                this.arrayPostres.push(producto);
                if(producto.Nombre == ''){
                  this.listaDisplayPostres.push('none')
                }else{
                  this.listaDisplayPostres.push('contents')
                }
                break
              case 'Tiraditos':
                this.arrayTiraditos.push(producto);
                if(producto.Nombre == ''){
                  this.listaDisplayTiraditos.push('none')
                }else{
                  this.listaDisplayTiraditos.push('contents')
                }
                break
            }
          }
        })
        this.formData.set('ItemCategoria','');
        this.formData.set('Seccion','');

      }

      console.log(this.listaDisplayArroces)
      console.log(this.listaDisplayCarnes)
      console.log(this.listaDisplayCausas)
      console.log(this.listaDisplayCeviches)
      console.log(this.listaDisplayChicharrones)
      console.log(this.listaDisplayEspeciales)
      console.log(this.listaDisplayJugosos)
      console.log(this.listaDisplayLicores)
      console.log(this.listaDisplayPastas)
      console.log(this.listaDisplayPostres)
      console.log(this.listaDisplayTiraditos)
    })


  }

  listarCategorias(){
    this.categoriaService.listarCategorias().subscribe(categorias=>{
      this.listaCategorias = Object.values(categorias)[0]
      console.log(this.listaCategorias)
    })
  }


  mostrarCategorias(){
    this.categoriaService.listarCategorias().subscribe(categorias => {
      this.listaCategorias = Object.values(categorias)[0]; //-> [{},{},{},{}]
      for (let blnEstado of this.listaCategorias){
        if(Object.values(blnEstado)[2] === true){
          this.listaDisplayCategorias.push('contents')
        }else{
          this.listaDisplayCategorias.push('none')
        }
      }
    })
  }

 

 

    

}


