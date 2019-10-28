import { Component } from '@angular/core';
import { AuthService } from "../servicios/auth.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public authService: AuthService) {}

  onLogOut(){
    this.authService.logout();
  }

}
