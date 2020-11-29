import { Component, OnInit } from '@angular/core';

import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {

  constructor(private db: AngularFireDatabase) { }

  ngOnInit(): void {
    
    const thing = this.db.object('/').valueChanges();
    thing.subscribe(console.log);
  }

}
