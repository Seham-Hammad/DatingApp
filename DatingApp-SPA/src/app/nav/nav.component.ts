import { AuthService } from './../_services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
  
export class NavComponent  {
  model: any ={ }
;

constructor(private authService: AuthService) { }

  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log("Logged in successfull");
    }, error => {
        console.log("Failed to login");
    })
  }
  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    console.log('logged out');
  }

}
