import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public nombre: string;
  public apellido: string;
  public ci: string;
  public telf: string;
  public email: string;
  public password: string;
  //public cpassword: string;
  //aquí
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmitRegister(){
    this.auth.register(this.nombre, this.apellido, this.ci, this.telf, this.email, this.password).then(auth => {
      this.router.navigate(['/tabs']);
      console.log(auth);
    }).catch(err => console.log(err));
  }

}
