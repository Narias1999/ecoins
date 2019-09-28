import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  conditions: boolean;
  router: Router;

  constructor(router: Router) {
    this.router = router
    this.conditions = false
  }
  conditionsEvent($event) {
    this.conditions = !this.conditions
  }
  doLogin() {
    if (this.conditions) {
      this.router.navigate(['/home']);
    } else {
      alert('Debes aceptar los terminos y condiciones para continuar')
    }
  }

  ngOnInit() {
  }

}
