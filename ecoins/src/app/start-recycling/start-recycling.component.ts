import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-recycling',
  templateUrl: './start-recycling.component.html',
  styleUrls: ['./start-recycling.component.scss']
})
export class StartRecyclingComponent implements OnInit {

  showDrawer:Boolean

  constructor() {
    this.showDrawer = false
  }

  ngOnInit() {
  }

}
