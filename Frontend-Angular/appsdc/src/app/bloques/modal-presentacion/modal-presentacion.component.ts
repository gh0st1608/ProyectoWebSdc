import { Component, Input,Output,ViewChild, OnInit, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-modal-presentacion',
  templateUrl: './modal-presentacion.component.html',
  styleUrls: ['./modal-presentacion.component.css']
})
export class ModalPresentacionComponent implements OnInit {
  @Input()
  open5: boolean = false;
  //private element: any;

  @Output() 
  closeModalPresentacion= new EventEmitter<boolean>();

  @ViewChild("fileInput") 
  fileInput:any;

  //objpresentacionForm: any;
  presentacionForm: FormGroup = new FormGroup({}); 
  private formData: FormData = new FormData();
  items: string[] = [];
  itemSeleccionado : string = '0';
  blnValidaTamaño : boolean = false;

  constructor(
    private formBuilder: FormBuilder, 
    private productoService : ProductoService,
    //private cartaComponent : CartaComponent
  ) {
    this.items = ['Izquierda', 'Derecha Superior', 'Derecha Inferior', 'Base Inferior'];
  }

  ngOnInit(){
    this.presentacionForm = this.formBuilder.group({
      Item: [''],
      Nombre: [''],
      Precio: [''],
    });
  }
  
  seleccionarItemPresentacion(){

    this.presentacionForm.controls['Item'].setValue(this.itemSeleccionado)
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
        if (ancho == 800 && alto === 800){
          this.formData.append('Imagen', file)
          console.log('Se envia un formData con los parametros de file')
          this.formData.append('ImagenName', file.name)
          this.formData.append('ImagenSize', file.size)
          this.formData.append('ImagenType', file.type)
        }else{
          alert('Ingresar una imagen de 800 de ancho y 800 de alto')
          this.fileInput.nativeElement.value = "";
        }
        
      }

      console.log(file);
      //this.presentacionForm.controls['Imagen'].setValue(file,{emitModelToViewChange: false});

    }

  }




  handleSave = () => {

    for (let item in this.presentacionForm.value) {
          this.formData.append(item, this.presentacionForm.value[item]);
    }
    this.formData.append('Seccion', 'T');
    this.formData.append('Categoria','');
    this.formData.append('Descripcion', '');
    this.actualizarProducto(this.formData);
    this.refrescar();
  }

  handleCancel = () => {
      this.closeModalPresentacion.emit(false);
  }

  refrescar(){

    this.fileInput.nativeElement.value = "";
    this.presentacionForm.controls['Item'].setValue(['0'])
    this.presentacionForm.controls['Nombre'].setValue('')
    this.presentacionForm.controls['Precio'].setValue('')
    
    this.formData.set('Item', '');
    this.formData.set('Nombre', '');
    this.formData.set('Precio', '');
    this.formData.set('Descripcion', '');
    this.formData.set('Categoria','');
    this.formData.set('Seccion', '');
    this.formData.set('Imagen', '');
    this.formData.set('ImagenName', '');
    this.formData.set('ImagenSize', '');
    this.formData.set('ImagenType', '');
  }
  
    actualizarProducto(formData : FormData){   
        //const objProducto = this.presentacionForm.value;
        this.productoService.actualizarProducto(formData)
        .subscribe(presentacionActualizado=>{
          //this.cartaComponent.actualizarCarta(productoActualizado)
          console.log(presentacionActualizado)
        })
    }

    




}