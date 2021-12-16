import { Component, OnInit, HostListener } from '@angular/core';




@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {


  constructor() { }
  isModalOpened : boolean = false;
  isModalOpened2 : boolean = false;
  isModalOpened3 : boolean = false;
  isModalOpened4 : boolean = false;
  isModalOpened5 : boolean = false;
  isModalOpened6 : boolean = false;
  ngOnInit() {
  }

  handleClick = () => {
    this.isModalOpened = true;
  } 
  handleClick2 = () => {
    this.isModalOpened2 = true;
  }
  handleClick3 = () => {
    this.isModalOpened3 = true;
  }
  handleClick4 = () => {
    this.isModalOpened4 = true;
  }
  handleClick5 = () => {
    this.isModalOpened5 = true;
  }
  handleClick6 = () => {
    this.isModalOpened6 = true;
  }


  handleClose(event:any):void{
    this.isModalOpened = event      
  }

  handleClose2(event:any):void{
    this.isModalOpened2 = event      
  }

  handleClose3(event:any):void{
    this.isModalOpened3 = event      
  }

  handleClose4(event:any):void{
    this.isModalOpened4 = event      
  }

  handleClose5(event:any):void{
    this.isModalOpened5 = event      
  }

  handleClose6(event:any):void{
    this.isModalOpened6 = event      
  }




}
