import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
//import { Empleado } from '../models/empleado';


@Injectable({
  providedIn: "root"
})

export class EventoService {

  constructor(private http:HttpClient){}
  Host = 'http://' + environment.HostBackend + ':3000';

  actualizarEvento(formData:FormData){
    //console.log(producto)
    const path = this.Host + '/evento/actualizar';
    return this.http.post(path,formData)
  }

  listarEventos(){
    //console.log(producto)
    const path = this.Host + '/evento/listar';
    return this.http.post(path,{})
  }

}