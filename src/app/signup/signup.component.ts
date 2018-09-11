import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ServerService} from '../server.service';
import {Router, RouterEvent} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('pas') pas;
  @ViewChild('repas') repas;

  constructor(private req: ServerService, private router: Router) { }

  ngOnInit() {
  }
  onSignUp(form: NgForm) {
    this.req.requestSignUp({'email': form.value.email, // sending email , password to requestsignup
      'password': form.value.password}) // function in serverservice to signup user and login
      .subscribe(
        (response: {token: string}) => {this.req.token = response.token; // getting token of signrd up user
        this.req.loggedin.emit('yes');
          this.router.navigate(['/users']); // changing navbar to main navbar
        },
        (error) => alert('An error occured, please try again'));
  }

}
