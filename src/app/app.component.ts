import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
/*import {HttpClientService} from './services/httpClient.service';*/


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  /*providers: [HttpClientService]*/
})
export class AppComponent implements OnInit {
  title = 'app';

  user: string[];

  constructor(private http: HttpClient){
  }

  ngOnInit(): void {
    this.http.get('https://cv-project-6fa7f.firebaseio.com/user.json').subscribe(data => {
      this.user = data['user']
    });
  }


}
