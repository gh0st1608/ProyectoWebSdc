import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
//import { Empleado } from '../models/empleado';


@Injectable({
  providedIn: "root"
})

export class CategoriaService {
  constructor(private http:HttpClient){}
  Host = 'http://' + environment.HostBackend + ':3000';

  actualizarCategoria(formData:FormData){
    //console.log(producto)
    const path = this.Host + '/categoria/actualizar';
    return this.http.post(path,formData)
  }


  listarCategorias(){
    //console.log(producto)
    const path = this.Host + '/categoria/listar';
    return this.http.post(path,{}) //retorna un observable
  }
}