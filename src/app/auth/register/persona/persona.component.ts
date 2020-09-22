import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../../models/user';
import { Otp } from '../../../models/otp';
import { PersonalService } from '../../../services/personal.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
  providers: [PersonalService]
})
export class PersonaComponent implements OnInit {
  public title: string;
  public user: User;
  public otp: Otp;

  constructor(private _route: ActivatedRoute, private _router: Router, private _personalService: PersonalService) {
    this.title = 'Registro';
    this.otp = new Otp('', '', '');
    this.user = new User('','','','','','','','','','user','','','','');
  }

  ngOnInit(): void {}

  onSubmitOtp(registerForm){
    this._personalService.registerOtp(this.otp).subscribe(
      response => {
        console.log(response);
        this.otp = new Otp('', '', '');
        // Swal.fire({
        //   title: 'Envio exitoso!',
        //   text: 'Por favor revisa tu correo electrónico',
        //   icon: 'success',
        //   confirmButtonText: 'Aceptar'
        // })
        registerForm.reset();
        // $('.nav-tabs li:eq(1) a').tab('show');
      },
      error => {
        console.log( <any>error );
        // Swal.fire({
        //   title: 'Oh! Tienes problemas?',
        //   text: <any>error.error.message,
        //   icon: 'error',
        //   confirmButtonText: 'Aceptar'
        // })
      }
    );
  }

   onSubmitRegistroPersona(registerFormPersonal){
    this._personalService.registerUserPersonal(this.user).subscribe(
      response => {
        this.user = new User('','','','','','','','','','user','','','','');
        // Swal.fire({
        //   title: 'Envio exitoso!',
        //   text: 'Por favor revisa tu correo electrónico',
        //   icon: 'success',
        //   confirmButtonText: 'Aceptar'
        // })
        registerFormPersonal.reset();
      },
      error => {
        console.log(<any>error);
        // Swal.fire({
        //   title: 'Oh! Tienes problemas?',
        //   text: <any>error.error.message,
        //   icon: 'error',
        //   confirmButtonText: 'Aceptar'
        // })
      }
    );
  }
}
