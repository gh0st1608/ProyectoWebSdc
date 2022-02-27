import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Producto } from '../models/producto';


@Injectable({
  providedIn: "root"
})

export class ProductoService {

  constructor(private http:HttpClient){}
  urlProd = 'http://54.224.80.70:3000'
  urlDesa = 'http://localhost:3000'

  actualizarProducto(formData:FormData){
    //console.log(producto)
    const path = this.urlProd + '/producto/actualizar';
    return this.http.post(path,formData)
  }


  listarProductos(formData: FormData){
    //console.log(producto)
    const path = this.urlProd + '/producto/listar';
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