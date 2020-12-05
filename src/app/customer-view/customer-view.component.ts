import {Component, OnInit, ViewChild} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {any} from 'codelyzer/util/function';
declare var $:any;
@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})

export class CustomerViewComponent implements OnInit {

roomObject: Observable<any>;
  rooms$;

  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit(): void {
    this.rooms$ = this.db.list('/rooms').valueChanges();

    this.roomObject = this.db.object('/rooms').valueChanges();
   }



  openModal(){
    $('#staticBackdrop').modal('show');
  }


  reserve(){
    const room3= this.db.object('/rooms/room3');
    room3.update({ reserved: 'TAK', isAcive: false });
    room3.update({ isActive: false });
  }

}


