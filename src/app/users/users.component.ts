import { Component, OnInit } from '@angular/core';
import {ServerService} from '../server.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private req: ServerService, private route: Router) { }
  data: {};
  currentpage = 1;

  ngOnInit() {
    if (this.req.token === 'no') { // if user not signed in, send user to login page
      this.route.navigateByUrl('/');
    }
    this.req.requestList(this.currentpage)  // using requestlist function in serverservice to get list of users
      .subscribe(
        (response) => this.data = response,
        (error) => console.log(error)
        );
  }
  pageforward() {
    this.currentpage++;  // TO load next page , increase currentpage value
    this.ngOnInit();
  }
  pageBackwards() {  // To load previous page , decreamenting previouspage value by 1
    this.currentpage--;
    this.ngOnInit();
  }
  editPage(temp: {'id'}) {
    this.route.navigateByUrl('/edit/' + temp.id); // sending ID of user to be edited through URL
  }
  deleteUser(temp: {id: number}) {
    this.req.deleteUser(temp.id)  // Using deleteuser function in serverservice to make API call to delete user
      .subscribe(
        () => {
          alert('user ' + temp.id + ' deleted.');
          this.ngOnInit();
        }
      );
  }

}
