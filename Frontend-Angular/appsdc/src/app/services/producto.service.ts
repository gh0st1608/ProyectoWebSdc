import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Producto } from '../models/producto';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: "root"
})

export class ProductoService {

  constructor(private http:HttpClient){}

  Host = 'http://' + environment.HostBackend + ':3000';

  actualizarProducto(formData:FormData){
    //console.log(producto)
    const path = this.Host + '/producto/actualizar';
    return this.http.post(path,formData)
  }


  listarProductos(formData: FormData){
    //console.log(producto)
    const path = this.Host + '/producto/listar';
    return this.http.post(path,formData)
  }

  /*
  upload(fileToUpload: any) {
    let input = new FormData();
    input.append("file", fileToUpload);
    return this.http
        .post("/api/uploadFile", input);
  }
*/


}