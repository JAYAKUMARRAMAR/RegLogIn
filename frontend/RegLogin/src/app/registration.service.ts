import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  httpClient: any;

  constructor(private _http:HttpClient) { }

  public loginUserFromRemote(user:User):Observable<any>{
  return this._http.post<any>("http://localhost:8081/api/login",user)
  }

    public registerUserFromRemote(user:User):Observable<any>{
    return this._http.post<any>("http://localhost:8081/api/registeruser",user)
    }

    public getUserList(): Observable<User[]>{
        return this._http.get<User[]>("http://localhost:8081/api/user")
      }

}
