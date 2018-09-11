import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {ServerService} from '../server.service';

@Component({
  selector: 'app-nav-main',
  templateUrl: './nav-main.component.html',
  styleUrls: ['./nav-main.component.css']
})
export class NavMainComponent implements OnInit {

  constructor(private route: Router, private req: ServerService) { }

  ngOnInit() {
  }
  signout() {
     this.req.token = 'no'; // when user signs out, changing token value to 'no' again
     this.req.loggedin.emit('no'); // changing the navbar to login page navbar
     this.route.navigate(['/']); // navigating to login page
  }

}
