- Firebase example
```js
import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecoins';
  db:AngularFireDatabase;
  items: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.db = db
  }

  send() {
    const ref = this.db.list('/')
    ref.push({
      x: 123
    })

    ref.valueChanges().subscribe(console.log)
  }
}
```