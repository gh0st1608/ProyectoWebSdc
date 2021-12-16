import { Component, Input,Output,ViewChild, OnInit, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-modal-personal',
  templateUrl: './modal-personal.component.html',
  styleUrls: ['./modal-personal.component.css']
})
export class ModalPersonalComponent implements OnInit {

  @Input()
  open3: boolean = false;
  //private element: any;

  @Output() 
  closeModalPersonal= new EventEmitter<boolean>();

  @ViewChild("fileInput") 
  fileInput:any;

  //objProductoForm: any;
  empleadoForm: FormGroup = new FormGroup({}); 
  private formData: FormData = new FormData();
  items: string[] = [];
  itemSeleccionado : string = '0';
  blnValidaTamaño : boolean = false;

  constructor(
    private formBuilder: FormBuilder, 
    private empleadoService : EmpleadoService,
    //private cartaComponent : CartaComponent
  ) {
    this.items = ['1', '2', '3', '4'];
  }

  ngOnInit(){
    this.empleadoForm = this.formBuilder.group({
      Item: [''],
      Nombre: [''],
      ApellidoPaterno: [''],
      ApellidoMaterno: [''],
      Cargo: [''],
      Descripcion: [''],
    });
  }
  
  seleccionarItemPersonal(){
    this.empleadoForm.controls['Item'].setValue(this.itemSeleccionado)
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
        if (ancho == 300 && alto === 250){
          this.formData.append('Imagen', file)
          console.log('Se envia un formData con los parametros de file')
          this.formData.append('ImagenName', file.name)
          this.formData.append('ImagenSize', file.size)
          this.formData.append('ImagenType', file.type)
        }else{
          alert('Ingresar una imagen de 300 de ancho y 500 de alto')
          this.fileInput.nativeElement.value = "";
        }
        
      }

      console.log(file);
      //this.productoForm.controls['Imagen'].setValue(file,{emitModelToViewChange: false});

    }

  }




  handleSave = () => {

    for (let item in this.empleadoForm.value) {
          this.formData.append(item, this.empleadoForm.value[item]);
    }

    this.actualizarEmpleado(this.formData);
    this.refrescar();
  }

  handleCancel = () => {
      this.closeModalPersonal.emit(false);
  }

  refrescar(){

    this.fileInput.nativeElement.value = "";
    this.empleadoForm.controls['Item'].setValue(['0'])
    this.empleadoForm.controls['Nombre'].setValue('')
    this.empleadoForm.controls['ApellidoPaterno'].setValue('')
    this.empleadoForm.controls['ApellidoMaterno'].setValue('')
    this.empleadoForm.controls['Cargo'].setValue('')
    this.empleadoForm.controls['Descripcion'].setValue('')
    
    this.formData.set('Item', '');
    this.formData.set('Nombre', '');
    this.formData.set('ApellidoPaterno', '');
    this.formData.set('ApellidoMaterno', '');
    this.formData.set('Cargo', '');
    this.formData.set('Descripcion', '');
    this.formData.set('Imagen', '');
    this.formData.set('ImagenName', '');
    this.formData.set('ImagenSize', '');
    this.formData.set('ImagenType', '');
  }
  
    actualizarEmpleado(formData : FormData){   
        //const objProducto = this.productoForm.value;
        this.empleadoService.actualizarEmpleado(formData)
        .subscribe(empleadoActualizado=>{
          //this.cartaComponent.actualizarCarta(productoActualizado)
          console.log(empleadoActualizado)
        })
    }

    




}