import { Component, Input,Output,ViewChild, OnInit, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-modal-categoria',
  templateUrl: './modal-categoria.component.html',
  styleUrls: ['./modal-categoria.component.css']
})
export class ModalCategoriaComponent implements OnInit {
  @Input()
  open6: boolean = false;
  //private element: any;

  @Output() 
  closeModalCategoria= new EventEmitter<boolean>();

  @ViewChild("fileInput") 
  fileInput:any;

  //objProductoForm: any;
  categoriaForm: FormGroup = new FormGroup({}); 
  private formData: FormData = new FormData();
  cboCategorias: string[] = [];
  cboEstado: string[] = [];
  itemSeleccionadoCategoria : string = '0';
  itemSeleccionadoEstado : string = '0';
  blnValidaTamaño : boolean = false;

  constructor(
    private formBuilder: FormBuilder, 
    private categoriaService : CategoriaService,
    //private cartaComponent : CartaComponent
  ) {
    this.cboEstado = ['Activo','Inactivo'];
  }

  ngOnInit(){
    this.categoriaForm = this.formBuilder.group({
      Nombre: [''],
      Descripcion: [''],
      ItemCategoria: [''],
      ItemEstado: ['']
    });

    this.cargarCategorias();

  }
  
  seleccionarItemCategoria(){
    this.categoriaForm.controls['ItemCategoria'].setValue(this.itemSeleccionadoCategoria)
  }

  seleccionarItemEstado(){
    this.categoriaForm.controls['ItemEstado'].setValue(this.itemSeleccionadoEstado)
  }



  handleSave = () => {

    for (let item in this.categoriaForm.value) {
          this.formData.append(item, this.categoriaForm.value[item]);
    }

    this.actualizarCategoria(this.formData);
    this.refrescar();
  }

  handleCancel = () => {
      this.closeModalCategoria.emit(false);
  }

  refrescar(){

    this.categoriaForm.controls['Nombre'].setValue('')
    this.categoriaForm.controls['Descripcion'].setValue('')
    this.categoriaForm.controls['ItemCategoria'].setValue(['0'])
    this.categoriaForm.controls['ItemEstado'].setValue(['0'])
    
    

    this.formData.set('Nombre', '');
    this.formData.set('Descripcion', '');
    this.formData.set('ItemCategoria', '');
    this.formData.set('ItemEstado', '');
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
  
    actualizarCategoria(formData : FormData){   
        //const objProducto = this.productoForm.value;
        this.categoriaService.actualizarCategoria(formData)
        .subscribe(categoriaActualizado=>{
          //this.cartaComponent.actualizarCarta(productoActualizado)
          console.log(categoriaActualizado)
        })
    }

    




}