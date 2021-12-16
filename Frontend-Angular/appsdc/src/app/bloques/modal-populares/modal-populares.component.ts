import { Component, Input,Output,ViewChild, OnInit, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-modal-populares',
  templateUrl: './modal-populares.component.html',
  styleUrls: ['./modal-populares.component.css']
})
export class ModalPopularesComponent implements OnInit {

  @Input()
  open4: boolean = false;
  //private element: any;

  @Output() 
  closeModalPopulares= new EventEmitter<boolean>();

  @ViewChild("fileInput") 
  fileInput:any;

  //objProductoForm: any;
  popularesForm: FormGroup = new FormGroup({}); 
  private formData: FormData = new FormData();
  items: string[] = [];
  itemSeleccionado : string = '0';
  blnValidaTamaño : boolean = false;

  constructor(
    private formBuilder: FormBuilder, 
    private productoService : ProductoService,
    //private cartaComponent : CartaComponent
  ) {
    this.items = ['1', '2', '3', '4'];
  }

  ngOnInit(){
    this.popularesForm = this.formBuilder.group({
      Item: [''],
      Nombre: [''],
      Descripcion: [''],
      Precio: [''],
    });
  }
  
  seleccionarItemPopulares(){
    this.popularesForm.controls['Item'].setValue(this.itemSeleccionado)
  }



  onFileSelect(event:any) {

    this.formData.set('ImagenName', '');
    this.formData.set('ImagenSize', '');
    this.formData.set('ImagenType', '');
    
    if (event.target.files.length > 0) {

      const file = event.target.files[0];
      const _URL = window.URL || window.webkitURL;
      const img = new Image();
      img.src = _URL.createObjectURL(file);
      console.log(img.src)
      img.onload = () => {
        const ancho = img.width;
        const alto = img.height;
        console.log(ancho + ' ' + alto);
        if (ancho == 600 && alto === 500){
          this.formData.append('Imagen', file)
          console.log('Se envia un formData con los parametros de file')
          this.formData.append('ImagenName', file.name)
          this.formData.append('ImagenSize', file.size)
          this.formData.append('ImagenType', file.type)
        }else{
          alert('Ingresar una imagen de 600 de ancho y 500 de alto')
          this.fileInput.nativeElement.value = "";
        }
        
      }

      console.log(file);
      //this.productoForm.controls['Imagen'].setValue(file,{emitModelToViewChange: false});

    }

  }




  handleSave = () => {

    for (let item in this.popularesForm.value) {
          this.formData.append(item, this.popularesForm.value[item]);
    }
    this.formData.append('Seccion', 'P');
    this.formData.append('ItemCategoria', '');
    this.actualizarProducto(this.formData);
    this.refrescar();
  }

  handleCancel = () => {
      this.closeModalPopulares.emit(false);
  }

  refrescar(){

    this.fileInput.nativeElement.value = "";
    this.popularesForm.controls['Item'].setValue(['0'])
    this.popularesForm.controls['Nombre'].setValue('')
    this.popularesForm.controls['Descripcion'].setValue('')
    this.popularesForm.controls['Precio'].setValue('')
    
    this.formData.set('Item', '');
    this.formData.set('Nombre', '');
    this.formData.set('Descripcion', '');
    this.formData.set('Precio', '');
    this.formData.set('ItemCategoria', '');
    this.formData.set('Seccion', '');
    this.formData.set('Imagen', '');
    this.formData.set('ImagenName', '');
    this.formData.set('ImagenSize', '');
    this.formData.set('ImagenType', '');
  }
  
    actualizarProducto(formData : FormData){   
        //const objProducto = this.productoForm.value;
        this.productoService.actualizarProducto(formData)
        .subscribe(popularActualizado=>{
          //this.cartaComponent.actualizarCarta(productoActualizado)
          console.log(popularActualizado)
        })
    }

    




}
