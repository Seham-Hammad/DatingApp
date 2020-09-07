import { AlertifyService } from './../_services/alertify.service';
import { AuthService } from './../_services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  model: any = {};

  constructor(
    public authService: AuthService,
    private alertifyService: AlertifyService
  ) {}

  login() {
    this.authService.login(this.model).subscribe(
      (next) => {
        this.alertifyService.success('Logged in successfull');
      },
      (error) => {
        this.alertifyService.error(error);
      }
    );
  }
  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    this.alertifyService.message('logged out');
  }
}
