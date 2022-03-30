import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
//import { Empleado } from '../models/empleado';


@Injectable({
  providedIn: "root"
})

export class EmpleadoService {

  constructor(private http:HttpClient){}
  urlProd = 'http://54.224.80.70:3000'
  urlDesa = 'http://localhost:3000'

  actualizarEmpleado(formData:FormData){
    //console.log(producto)
    const path = this.urlDesa + '/empleado/actualizar';
    return this.http.post(path,formData)
  }

  listarEmpleados(){
    //console.log(producto)
    const path = this.urlDesa + '/empleado/listar';
    return this.http.post(path,{}) //retorna un observable
  }

}