import { Component, OnInit } from '@angular/core';
import{ EventoService} from '../../services/evento.service'

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  private formData: FormData = new FormData()

  constructor(
    private eventoService: EventoService,
    ) 
  {}

  listaEventos:any[] = []

  listaDisplayEventos: any[] = []

  ngOnInit(): void {
    this.listarEventos()
    this.mostrarEventos()

  }

  listarEventos(){

    this.eventoService.listarEventos().subscribe(eventos =>{
      this.listaEventos = Object.values(eventos)[0]
    })
  }

  mostrarEventos(){
    this.eventoService.listarEventos().subscribe(eventos => {
      this.listarEventos = Object.values(eventos)[0]; //-> [{},{},{},{}]
      console.log(this.listaEventos)
      for (let itemEvento of this.listaEventos){
        console.log(Object.values(itemEvento)[1])
        if(Object.values(itemEvento)[1] !== ''){
          this.listaDisplayEventos.push('contents')
        }else{
          this.listaDisplayEventos.push('none')
        }
      }
      console.log(this.listaDisplayEventos)
    })
  }

}