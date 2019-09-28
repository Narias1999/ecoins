import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  customersRef: AngularFireList<any> = null;
  constructor(public http: HttpClient,
    private db: AngularFireDatabase) { }

  public getUserType(type:any): AngularFireList<any>{
    return this.db.list('/usertype/'+type);
  }
}
