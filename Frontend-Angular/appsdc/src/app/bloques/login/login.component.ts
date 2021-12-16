import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UsersService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit{
  
  
  constructor(private formBuilder:FormBuilder,public userService: UsersService, public router:Router) { }
  
  ngOnInit(): void {
    
  }
  
  loginForm = this.formBuilder.group({
    Usuario: [''],
    Clave: [''],
    Token: [''],
  })


  login() {
    const objUser = this.loginForm.value;
    //window.onload = () => {
    
    this.userService.login(objUser).subscribe(
      data => {
          //console.log(data)
          this.userService.setToken(data);
          if(Object.values(data)[0] == false){
            window.location.href = '/login'
          }else{
            window.location.href = '/admin';
          }
          
      })
  //}
    
  }



}
