import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Otp } from '../../../../models/otp';
import { PersonalService } from '../../../../services/personal.service';
import Swal from 'sweetalert2';
import {Subject} from 'rxjs';


@Component({
  selector: 'app-register-otp',
  templateUrl: './register-otp.component.html',
  styleUrls: ['./register-otp.component.css'],
  providers: [PersonalService]
})
export class RegisterOtpComponent implements OnInit {

  public otp: Otp;
  formOtp: FormGroup;
  @Output() dataOtp: EventEmitter<any>;

  constructor(private formb: FormBuilder, private _personalService: PersonalService) { 
    this.FormOtp();
    this.otp = new Otp('', '', '');
  }

  ngOnInit(): void {}

  // getDataOtp(){
  //   this.dataOtp.emit(this.otp);
  // }

  get emailNoValid(){
    return this.formOtp.get('email').invalid && this.formOtp.get('email').touched;
  }

  get nameNoValid(){
    return this.formOtp.get('name').invalid && this.formOtp.get('name').touched;
  }

  get phoneNoValid(){
    return this.formOtp.get('phone').invalid && this.formOtp.get('phone').touched;
  }

  FormOtp(){
    this.formOtp = this.formb.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      name: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  onSubmitOtp(){
    if(this.formOtp.invalid){
      return Object.values(this.formOtp.controls).forEach(control => {
        control.markAsTouched();
      });
    }else{
      this._personalService.registerOtp(this.formOtp.value).subscribe(
        response => {
          this.otp = new Otp('', '', '');
          Swal.fire({
            title: 'Envio exitoso!',
            text: 'Por favor revisa tu correo electrónico',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          })
          this.formOtp.reset();
        },
        error => {
          console.log(<any>error);
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
