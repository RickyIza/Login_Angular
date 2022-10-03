import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private myAppUrl:string;
  private myApiUrl:string;

  constructor(private http: HttpClient ){     
    this.myAppUrl =environment.endpoint;
    this.myApiUrl='users?key=ec124670/'
  }

  signInt(user:User):Observable<any>{
  return this.http.post('${this.myAppUrl}${this.myApiUrl}',user)

  }
}
