
import {HttpClientService} from './http-client.service';
import {Injectable} from '@angular/core';


@Injectable({
  providers: [HttpClientService]
})
export class CvService {

  constructor(private cv: HttpClientService) { }

  this.cv.getData('https://cv-project-6fa7f.firebaseio.com/user.json').subscibe(data =>{
  // data - результат
},

/*
error => {
  // error - объект ошибки
});*/

}


