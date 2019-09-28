import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelService } from '../model.service';

@Component({
  selector: 'app-register-ciu',
  templateUrl: './register-ciu.component.html',
  styleUrls: ['./register-ciu.component.scss']
})
export class RegisterCiuComponent implements OnInit {
  conditions: boolean;
  router: any;
  typePro: boolean;
  items: any;
  userType: any = [
    {value: "typeCol", name: 'Recolector'},
    {value: "typePro", name: 'Productor'}
  ]
  constructor(router: Router,
              public model: ModelService) { 
              
              
              }

  ngOnInit() {
  }
  conditionsEvent($event) {
    this.conditions = !this.conditions
  }

  changeUser(value){
     console.log('cha',value,this.typePro);
     if("Recolector" === value){
      this.typePro=false 
      this.model.getUserType('typePro')
          .valueChanges()
          .subscribe(item => this.items = item )
     } else {
      this.model.getUserType('typeCol')
        .valueChanges()
        .subscribe(item => this.items = item )
     }
  }

  atHome(){
    if (this.conditions) {
      this.router.navigate(['/home']);
    } else {
      alert('Debes aceptar los terminos y condiciones para continuar')
    }
  }
}
