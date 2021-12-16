import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ReservaService } from './reserva.service'

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})


export class ReservaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private reservaService: ReservaService) 
    { }

  reservaForm = this.formBuilder.group({
    Nombres: [''],
    Celular: [''],
    Correo: [''],
    Invitado: [''],
    Fecha: [''],
    Hora: [''], 
    Contenido: ['']
  });

  ngOnInit(): void {
  }

  submit() {
    console.warn(this.reservaForm.value); //en this.profileForm.value tenemos el valor del form para poder manipularlo a nuestro gusto. Si queremos acceder a, por ejemplo, un control especifico, podemos hacerlo con this.profileForm.controls['nombreControl']
    this.crearReserva()
    this.refrescar();
  }

  refrescar(){
    this.reservaForm.patchValue({
      Nombres: [''],
      Celular: [''],
      Correo: [''],
      Invitado: [''],
      Fecha: [''],
      Hora: [''], 
      Contenido: ['']
    });
  }


  crearReserva(){   
      const objReserva = this.reservaForm.value;
      this.reservaService.crearReserva(objReserva)
      .subscribe((nuevaReserva)=>{
        console.log(nuevaReserva)
      })
  }
}
