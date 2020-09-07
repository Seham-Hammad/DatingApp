import { AlertifyService } from './../_services/alertify.service';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
 
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(public authService: AuthService, private alertifyService: AlertifyService) {}

  register() {
    this.authService.register(this.model).subscribe(
      () => {
        this.alertifyService.success('Registration successfull');
      },
      (error) => {
        this.alertifyService.error(error);
      }
    );
  }
  cancel() {
    this.cancelRegister.emit(false);
    this.alertifyService.message('canceled');
  }
}
