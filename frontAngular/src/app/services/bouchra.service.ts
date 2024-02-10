import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BouchraService {
  private baseUrl="http://localhost:8000/api";

  constructor(private http:HttpClient) { }
  login(data: any){
    sessionStorage.setItem('username',data.nom);
    return this.http.post(`${this.baseUrl}/login`,data);
  }
  etudiantByUserId(userId: string) {
    return this.http.get(`${this.baseUrl}/etudiants/user/${userId}`);
  }
}
