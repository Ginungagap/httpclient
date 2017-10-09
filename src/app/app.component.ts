import { Component, OnInit } from '@angular/core';
import {HttpClientService} from './services/http-client.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpClientService]
})
export class AppComponent implements OnInit {
  title = 'app';
  /*user: string[];*/
  name: string;


  constructor(private http: HttpClientService){
  }
  ngOnInit(): void {
    this.http.getData('https://cv-project-6fa7f.firebaseio.com/user.json').subscribe
    (data => {
      /*this.user = data['user'];*/
      this.name = data.name;
      console.log (data);
    });
  }
}
