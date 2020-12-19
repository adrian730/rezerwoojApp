import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {
  roomObject: Observable<any>;
  rooms$;
  constructor(private db: AngularFireDatabase) { }

  ngOnInit(): void {
    this.rooms$ = this.db.list('/rooms').valueChanges();

    this.roomObject = this.db.object('/rooms').valueChanges();
  }
  cancel(){
    const room3= this.db.object('/rooms/room3');
    room3.update({ reserved: 'NIE', isAcive: true });
    room3.update({ isActive: true });
  }
}
