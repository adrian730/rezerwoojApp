import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login;
  pass;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  logIn() {
    if (this.login == 'user' && this.pass == 'user') {
      this.router.navigate(['/customer']);
    }
    if (this.login == 'admin' && this.pass == 'admin') {
      this.router.navigate(['/admin']);
    }

  }

}
