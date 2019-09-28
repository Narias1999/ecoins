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

  constructor(db: AngularFireDatabase) {
    this.db = db
  }

  send() {
    const ref = this.db.list('/')
    // push an collection
    ref.push({
      x: 123
    })

    // retrieve data in realtime
    ref.valueChanges().subscribe(console.log)

    //set a value(update)
    his.db.list('/').set('key-to-update', 'new data')
  }
}
```