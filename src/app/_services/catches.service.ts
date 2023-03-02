import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Catch } from '@app/_models';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatchesService {

  constructor(private http: HttpClient) { }

  add(fogas: Catch) {
    return this.http.post(`${environment.apiUrl}/catches/add`, fogas);
  }

  getAll() {
    return this.http.get<Catch[]>(`${environment.apiUrl}/catches`);
  }

  getById(id: string) {
    return this.http.get<Catch>(`${environment.apiUrl}/catches/${id}`);
  }

  update(id: string, params: any) {
    return this.http.put(`${environment.apiUrl}/catches/${id}`, params);
  }

  delete(id: string) {
    return this.http.delete(`${environment.apiUrl}/catches/${id}`);
  }
}