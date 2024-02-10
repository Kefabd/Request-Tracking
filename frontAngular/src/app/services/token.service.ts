import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  handle(token: any, expirationMinutes: number = 60) {
    const expirationTime = Date.now() + expirationMinutes * 60 * 1000; // Convert minutes to milliseconds
    this.set(token, expirationTime);
    console.log(this.loggedIn());
  }

  set(token: any, expirationTime: number) {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('tokenExpiration', expirationTime.toString());
  }

  get() {
    const expirationTime = sessionStorage.getItem('tokenExpiration');
    if (expirationTime && Number(expirationTime) > Date.now()) {
      return sessionStorage.getItem('token');
    } else {
      this.remove(); // Remove expired token
      this.clearSession(); 
      return null;
    }
  }
  private clearSession() {
    sessionStorage.clear();
  }

  remove() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('tokenExpiration');
  }

  isValid() {
    const token = this.get();
    return !!token;
  }

  payload(token: any) {
    const payload = token.split('.')[1];
    return payload ? this.decode(payload) : null;
  }

  decode(payload: any) {
    return JSON.parse(atob(payload));
  }

  loggedIn() {
    return this.isValid();
  }

  getRole() {
    const token = this.get();
    if (token) {
      const payload = this.payload(token);
      return payload ? payload.role : null;
    }
    return null;
  }

  getUsername() {
    const token = this.get();
    if (token) {
      const payload = this.payload(token);
      return payload ? payload.username : null;
    }
    return null;
  }
}
