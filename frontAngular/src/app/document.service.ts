import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  private apiUrl = 'http://127.0.0.1:8000/api'; 
  constructor(private http: HttpClient) {}

  // Exemple de méthode pour récupérer des documents depuis l'API Laravel
  getDocuments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/documents`);
  }

  // Exemple de méthode pour sauvegarder un document vers l'API Laravel
  saveDocument(formData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/documents`, formData);
  }
}
