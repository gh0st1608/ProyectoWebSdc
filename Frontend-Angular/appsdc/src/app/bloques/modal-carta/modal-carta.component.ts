import { Component, Input,Output,ViewChild, OnInit, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoriaService } from '../../services/categoria.service';
import { ProductoService } from '../../services/producto.service';

@Component({ 
    selector: 'app-modal-carta', 
    templateUrl: 'modal-carta.component.html', 
    styleUrls: ['modal-carta.component.css'],
})

export class ModalComponent implements OnInit {
    @Input()
    open: boolean = false;
    //private element: any;

    @Output() 
    closeModalCarta= new EventEmitter<boolean>();

    @ViewChild("fileInput") 
    fileInput:any;

    //objProductoForm: any;
    productoForm: FormGroup = new FormGroup({}); 
    private formData: FormData = new FormData();
    items: string[] = [];
    cboCategorias: string[] = [];
    itemSeleccionadoCarta : string = '0';
    itemSeleccionadoCategoria : string = '0';
    blnValidaTamaño : boolean = false;
    tipoSeccion: string = '';

    constructor(
      private formBuilder: FormBuilder, 
      private productoService : ProductoService,
      private categoriaService : CategoriaService
    ) {
      this.items = ['1', '2', '3', '4', '5'];
    }

    ngOnInit(){
      this.productoForm = this.formBuilder.group({
        Item: [''],
        ItemCategoria: [''],
        Nombre: [''],
        Precio: [''],
        Descripcion: [''],
      });

      this.cargarCategorias();

    }
    
    seleccionarItemCarta(){
      this.productoForm.controls['Item'].setValue(this.itemSeleccionadoCarta)
    }

    seleccionarItemCategoria(){
      this.productoForm.controls['ItemCategoria'].setValue(this.itemSeleccionadoCategoria)
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

      for (let item in this.productoForm.value) {
            this.formData.append(item, this.productoForm.value[item]);
      }

      this.formData.append('Seccion', 'C');
      this.actualizarProducto(this.formData);
      this.refrescar();
    }

    handleCancel = () => {
        this.closeModalCarta.emit(false);
        console.log(this.open)
    }

    refrescar(){

      this.fileInput.nativeElement.value = "";
      this.productoForm.controls['Item'].setValue(['0'])
      this.productoForm.controls['ItemCategoria'].setValue(['0'])
      this.productoForm.controls['Nombre'].setValue('')
      this.productoForm.controls['Precio'].setValue('')
      this.productoForm.controls['Descripcion'].setValue('')
      
      this.formData.set('Item', '');
      this.formData.set('ItemCategoria', '');
      this.formData.set('Nombre', '');
      this.formData.set('Precio', '');
      this.formData.set('Descripcion', '');
      this.formData.set('Seccion', '');
      this.formData.set('Imagen', '');
      this.formData.set('ImagenName', '');
      this.formData.set('ImagenSize', '');
      this.formData.set('ImagenType', '');
    }
    
    cargarCategorias(){
      let Categorias:string[] = []
      this.categoriaService.listarCategorias().subscribe(categoriasLista => {
        Categorias  = Object.values(categoriasLista)[0];
        //this.cboCategorias2  = Object.values(categoriasLista)[0];
        for (let nombreCategoria of Categorias){
          //console.log(Object.values(nombreCategoria)[1])
          this.cboCategorias.push(Object.values(nombreCategoria)[1])
          //console.log(this.cboCategorias)
        }
      })
    }

    actualizarProducto(formData : FormData){   
          //const objProducto = this.productoForm.value;
          this.productoService.actualizarProducto(formData)
          .subscribe(productoActualizado=>{
            //this.cartaComponent.actualizarCarta(productoActualizado)
            console.log(productoActualizado)
          })
    }

      




}