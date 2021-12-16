import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  private formData: FormData = new FormData()

  constructor(
    private empleadoService: EmpleadoService,
    ) 
  {}

  listaEmpleados:any[] = []

  listaDisplayEmpleados: any[] = []

  ngOnInit(): void {
    this.listarEmpleados()
    this.mostrarEmpleados()

  }

  listarEmpleados(){

    this.empleadoService.listarEmpleados().subscribe(empleados =>{
      this.listaEmpleados = Object.values(empleados)[0]
    })
  }

  mostrarEmpleados(){
    this.empleadoService.listarEmpleados().subscribe(productos => {
      this.listaEmpleados = Object.values(productos)[0]; //-> [{},{},{},{}]
      console.log(this.listaEmpleados)
      for (let itemPopular of this.listaEmpleados){
        console.log(Object.values(itemPopular)[1])
        if(Object.values(itemPopular)[1] !== ''){
          this.listaDisplayEmpleados.push('contents')
        }else{
          this.listaDisplayEmpleados.push('none')
        }
      }
      console.log(this.listaDisplayEmpleados)
    })
  }

}