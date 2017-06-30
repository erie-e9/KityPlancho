import { Component, OnInit } from '@angular/core';
import { Empleados } from '../../../empleados/empleados';
import { LoginService } from './login.service';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Md2Toast } from 'md2';
import { username, password } from './authguard.guard';

@Component({
  selector: 'kp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  identity: any;
  token: any;
  public username;
  public password;
  public empleado: Empleados;
  public errorMessage;
  public message: boolean;
  constructor(private _loginService: LoginService,
              private _route: ActivatedRoute,
              private _router: Router,
              private toast: Md2Toast) {
                    this.empleado = {
                      IDEMPLEADO: null,
                      EEMAIL:'erictor@gmail.com',
                      EPASSWORD:'123456',
                      EPRIVILEGIO:'administrador',
                      ENOMBRE:'',
                      EAPELLIDOS:'',
                      ETELEFONO:'',
                      EDIRECCION:'',
                      EREFERENCIAFAM1:'',
                      EREFERENCIAFAM2:'',
                      EREFERENCIA1:'Itecor Itecor Itecor Itecor',
                      EREFERENCIA2:'Itecor Itecor Itecor Itecor',
                      EFECHACONTRATO:'2017-04-15',
                      EUBICACION:'24.02780775285771,-104.65332895517349',
                      ESUELDO:'',
                      ERFC:'',
                      EIMSS:'',
                      ETIPOCONTRATO:'',
                      IDSUCURSAL:1,
                  }
                   this.username = username;
                   this.password = password;
               }

  ngOnInit() {
  }
  //component login
  public login(){
    // e.preventDefault();
    //   	console.log(e);
    //   	var username = e.target.elements[0].value;
    //   	var password = e.target.elements[1].value;

    //   	if(username == 'erictor@gmail.com' && password == '123456') {
    //       this._loginService.setUserLoggedIn();
    //   		this._router.navigate(['acerca']);
    // }

    this._loginService.login(this.empleado).subscribe(
          response =>{
              console.log(response);
              this.empleado = response.ADMIN;
              if(response.ADMIN[0] != null){
                let username = this.empleado[0].EEMAIL;
                let password = this.empleado[0].EPASSWORD;
                   this._loginService.storedUserData(username, password);
                   this._loginService.setUserLoggedIn();
                   this.toastMe();
                   this._router.navigate(['pedidos']);
                   setTimeout(()=>{
                    location.reload();
                   },2000)
                  //  this._router.navigate(['pedidos']);

                 }else{
                  this.faillogin();
                  }
          },
          error =>{
              this.errorMessage = <any>error;
              if(this.errorMessage != null){
                  console.log(this.errorMessage);
                  this.message = true;
              }
          });
  }

  toastMe() {
      this.toast.toast(`Bienvenido de nuevo ${this.empleado[0].ENOMBRE}`);
    }

  faillogin() {
      this.toast.toast(`Algo ha salido mal al intentar ingresar, intenta de nuevo`);
    }
  failtoken(){
    this.toast.toast('No se ha generado el token correctamente');
  }
}
