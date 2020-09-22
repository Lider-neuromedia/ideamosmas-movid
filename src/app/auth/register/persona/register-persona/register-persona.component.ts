import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../../../models/user';
import { PersonalService } from '../../../../services/personal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-persona',
  templateUrl: './register-persona.component.html',
  styleUrls: ['./register-persona.component.css'],
  providers: [PersonalService]
})
export class RegisterPersonaComponent implements OnInit {

  public user: User;
  formUser: FormGroup;

  constructor(private formb: FormBuilder, private _personalService: PersonalService) { 
    this.FormUser();
    this.user = new User('','','','','','','','','','user','','','','');
  }

  ngOnInit(): void {}

  
  get nameNoValid(){
    return this.formUser.get('name').invalid && this.formUser.get('name').touched;
  }

  get lastnameNoValid(){
    return this.formUser.get('lastName').invalid && this.formUser.get('lastName').touched;
  }

  get otpNoValid(){
    return this.formUser.get('otp').invalid && this.formUser.get('otp').touched;
  }

  get phoneNoValid(){
    return this.formUser.get('phone').invalid && this.formUser.get('phone').touched;
  }

  get emailNoValid(){
    return this.formUser.get('email').invalid && this.formUser.get('email').touched;
  }

  FormUser(){
    this.formUser = this.formb.group({
      allowCorrespondence: [''],
      companyName: [''],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      firebaseToken: [''],
      imei: [''],
      lastName: ['', Validators.required],
      name: ['', Validators.required],
      otp: ['', Validators.required],
      phone: ['', Validators.required],
      role: ['user'],
      socialId: [''],
      socialOrigin: [''],
      typeCompany: [''],
      typeUser: ['']
    });
  }

  onSubmitUser(){
    if(this.formUser.invalid){
      return Object.values(this.formUser.controls).forEach(control => {
        control.markAsTouched();
      });
    }else{
      this._personalService.registerUserPersonal(this.formUser.value).subscribe(
        response => {
          this.user = new User('','','','','','','','','','user','','','','');
          Swal.fire({
            title: 'Bienvenido a Movid!',
            text: 'Datos de registro exitoso!',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          })
          this.formUser.reset();
        },
        error => {
          Swal.fire({
            title: 'Oh! Tienes problemas?',
            text: <any>error.error.message,
            icon: 'error',
            confirmButtonText: 'Aceptar'
          })
        }
      );
    }
  }
}
