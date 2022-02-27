import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
//import { Empleado } from '../models/empleado';


@Injectable({
  providedIn: "root"
})

export class EventoService {

  constructor(private http:HttpClient){}
  urlProd = 'http://54.224.80.70:3000'
  urlDesa = 'http://localhost:3000'

  actualizarEvento(formData:FormData){
    //console.log(producto)
    const path = this.urlProd + '/evento/actualizar';
    return this.http.post(path,formData)
  }

  listarEventos(){
    //console.log(producto)
    const path = this.urlProd + '/evento/listar';
    return this.http.post(path,{})
  }

}