import {Component, OnInit} from '@angular/core';
import {ServerService} from './server.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private req: ServerService) {
    this.req.loggedin.subscribe(   // subscribing to loggedin to change status value whenever it is emitted
      (status: string) => {             // and so change the navbar accordingly
         this.status = status;
      }
    );
  }
  status = 'no';
  ngOnInit() {}
}
