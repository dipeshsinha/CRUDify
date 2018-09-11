import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }

  token = 'no';
  loggedin = new EventEmitter<string>();

  requestLogin(servers) { // making API call to request login
    return this.http.post('https://reqres.in/api/login', servers);
  }
  requestSignUp(servers) { // making api call to request sign up
    return this.http.post('https://reqres.in/api/register', servers);
  }
  requestList(number: number) { // making api call to requst list of all users
    return this.http.get('https://reqres.in/api/users?page=' + number);
  }
  updateUser(servers, id) { // making api call to update a user
    return this.http.put('https://reqres.in/api/users/' + id, servers);
  }
  deleteUser(id: number) { // making api call to delete a user
    return this.http.delete('https://reqres.in/api/users/' + id);
  }
  createUser(servers) { // making api call to create a user
    return this.http.post('https://reqres.in/api/users', servers);
  }
}
