import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ServerService} from '../server.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  data: number;

  constructor(private ser: ServerService, private route: Router, private info: ActivatedRoute) {}

  ngOnInit() {
    if (this.ser.token === 'no') {
      this.route.navigateByUrl('/'); // if user is not logged in , navigate to login page
    }
    this.data = this.info.snapshot.params['id']; // getting ID from URL and saving it in data variable
  }
  onsubmit(f: NgForm) {
    this.ser.updateUser({'name': f.value.firstname + ' ' + f.value.lastname, // calling update API
      'job': f.value.job}, this.data).subscribe(                                   // using function in serverservice
      (response: {updatedAt: string}) => {
        alert('User ' + this.data + ' updated on ' + response.updatedAt);
        this.route.navigateByUrl('/users'); },
      (error) => alert('An error occurred , please try again')
    );
  }

}
