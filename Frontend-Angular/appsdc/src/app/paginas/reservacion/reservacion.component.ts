import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.css']
})
export class ReservacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /*$('.preloader p').fadeOut();
		$('.preloader').delay(500).fadeOut('slow');
		$('body').delay(600).css({'overflow':'visible'});*/
  }

}
