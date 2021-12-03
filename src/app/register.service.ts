import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDetail } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  formData: UserDetail= new UserDetail();
  readonly baseURL = 'http://localhost:31954/api/Register';
  list !: UserDetail[];


  constructor(private http: HttpClient) { }

  postRegisterUser() {
    return this.http.post(this.baseURL, this.formData);
  }

  refreshList() {
    (this.http.get(this.baseURL)).toPromise().then(res =>this.list = res as UserDetail[]);
  }


}
