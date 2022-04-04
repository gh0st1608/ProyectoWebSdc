import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
//import { Empleado } from '../models/empleado';


@Injectable({
  providedIn: "root"
})

export class EmpleadoService {

  constructor(private http:HttpClient){}
  Host = 'http://' + environment.HostBackend + ':3000';

  actualizarEmpleado(formData:FormData){
    //console.log(producto)
    const path = this.Host + '/empleado/actualizar';
    return this.http.post(path,formData)
  }

  listarEmpleados(){
    //console.log(producto)
    const path = this.Host + '/empleado/listar';
    return this.http.post(path,{}) //retorna un observable
  }

}