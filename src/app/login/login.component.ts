import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ServerService} from '../server.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private req: ServerService, private router: Router) {
  }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    this.req.requestLogin({'email': form.value.email,  // using requestlogin function in server service
    'password': form.value.password})                        // to send login request
      .subscribe(
        (response: {token: string}) => {this.req.token = response.token; // if login is successful, getting token value from server,
        this.req.loggedin.emit('yes');   // changing navbar to main navbar
          this.router.navigate(['/users']); }, // changing component to users component
        (error) => console.log(error)
      );
  }

}
