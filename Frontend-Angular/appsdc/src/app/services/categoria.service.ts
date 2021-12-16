import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
//import { Empleado } from '../models/empleado';


@Injectable({
  providedIn: "root"
})

export class CategoriaService {
  constructor(private http:HttpClient){}
  urlProd = 'http://52.204.176.6:3000'
  urlDesa = 'http://localhost:3000'

  actualizarCategoria(formData:FormData){
    //console.log(producto)
    const path = this.urlProd + '/categoria/actualizar';
    return this.http.post(path,formData)
  }


  listarCategorias(){
    //console.log(producto)
    const path = this.urlProd + '/categoria/listar';
    return this.http.post(path,{}) //retorna un observable
  }
}