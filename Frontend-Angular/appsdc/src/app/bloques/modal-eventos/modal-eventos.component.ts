import { Component, Input,Output,ViewChild, OnInit, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EventoService } from '../../services/evento.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-modal-eventos',
  templateUrl: './modal-eventos.component.html',
  styleUrls: ['./modal-eventos.component.css']
})
export class ModalEventosComponent implements OnInit {
  @Input()
  open2: boolean = false;
  //private element: any;

  @Output() 
  closeModalEventos= new EventEmitter<boolean>();

  @ViewChild("fileInput") 
  fileInput:any;

  //objProductoForm: any;
  eventoForm: FormGroup = new FormGroup({}); 
  private formData: FormData = new FormData();
  items: string[] = [];
  itemSeleccionado : string = '0';
  blnValidaTamaño : boolean = false;

  arrayMesesEN:string[] = ['January','February','March','April','May','June','July','August','September','October','November','December']
  arrayMesesES:string[] = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Setiembre','Octubre','Noviembre','Diciembre']

  constructor(
    private formBuilder: FormBuilder, 
    private eventoService : EventoService,
    //private cartaComponent : CartaComponent
  ) {
    this.items = ['1', '2', '3', '4','5','6'];
  }



  ngOnInit(){
    this.eventoForm = this.formBuilder.group({
      Item: [''],
      Titulo: [''],
      Descripcion: [''],
      Fecha: [''],
      Mes:[''],
      Dia:['']
    });

    
  }
  
  seleccionarItemEvento(){
    this.eventoForm.controls['Item'].setValue(this.itemSeleccionado)
  }

  formatearFecha(){
    const fecha = this.eventoForm.value['Fecha']
    const mes = formatDate(fecha,'MMMM','en_EN')
    const dia = fecha.substr(8,2)
    const indice = this.arrayMesesEN.indexOf(mes)
    const mesFormateado = this.arrayMesesES[indice]
    this.eventoForm.controls['Mes'].setValue(mesFormateado)
    this.eventoForm.controls['Dia'].setValue(dia)
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
        if (ancho == 600 && alto === 392){
          this.formData.append('Imagen', file)
          console.log('Se envia un formData con los parametros de file')
          this.formData.append('ImagenName', file.name)
          this.formData.append('ImagenSize', file.size)
          this.formData.append('ImagenType', file.type)
        }else{
          alert('Ingresar una imagen de 600 de ancho y 392 de alto')
          this.fileInput.nativeElement.value = "";
        }      
      }

      console.log(file);
      //this.productoForm.controls['Imagen'].setValue(file,{emitModelToViewChange: false});

    }

  }




  handleSave = () => {
    this.formatearFecha();
    for (let item in this.eventoForm.value) {
          this.formData.append(item, this.eventoForm.value[item]);
          console.log(this.eventoForm.value[item])
    }

    this.actualizarEvento(this.formData);
    this.refrescar();
  }

  handleCancel = () => {
      this.closeModalEventos.emit(false);
      console.log(this.open2)
  }

  refrescar(){

    this.fileInput.nativeElement.value = "";
    this.eventoForm.controls['Item'].setValue(['0'])
    this.eventoForm.controls['Titulo'].setValue('')
    this.eventoForm.controls['Descripcion'].setValue('')
    this.eventoForm.controls['Fecha'].setValue('')
    this.eventoForm.controls['Mes'].setValue('')
    this.eventoForm.controls['Dia'].setValue('')
    
    this.formData.set('Item', '');
    this.formData.set('Titulo', '');
    this.formData.set('Descripcion', '');
    this.formData.set('Fecha', '');
    this.formData.set('Mes', '');
    this.formData.set('Dia', '');
    this.formData.set('Imagen', '');
    this.formData.set('ImagenName', '');
    this.formData.set('ImagenSize', '');
    this.formData.set('ImagenType', '');
  }
  
    actualizarEvento(formData : FormData){   
        //const objProducto = this.productoForm.value;
        this.eventoService.actualizarEvento(formData)
        .subscribe(eventoActualizado=>{
          //this.cartaComponent.actualizarCarta(productoActualizado)
          console.log(eventoActualizado)
        })
    }

    




}