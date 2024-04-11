import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private authSrv: AuthService){
  }
logout(){
this.authSrv.logout();
}
}
