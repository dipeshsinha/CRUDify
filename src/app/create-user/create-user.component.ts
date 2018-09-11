import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ServerService} from '../server.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private ser: ServerService, private route: Router) { }

  ngOnInit() {
    if (this.ser.token === 'no') {
      this.route.navigateByUrl('/');       // if user is not signed in, return to home page
    }
  }

  onsubmit(f: NgForm) {
    this.ser.createUser({'name': f.value.firstname + f.value.lastname, 'job': f.value.job})
      .subscribe(
        (data: {createdAt: string}) => alert('User created on ' + data.createdAt),
      (error) => console.log(error)
      );                                        // calling the create api through function in server service
  }

}
