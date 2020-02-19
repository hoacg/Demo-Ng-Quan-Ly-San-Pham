import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DanhMucService {

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<any[]> {
    return this.httpClient.get<any[]>(`http://localhost:5000/api/category`);
  }

  addCategory(name: string): Observable<any> {
    // this.categories.push(name);
    const category = {
      name
    };

    console.log(category);
    return this.httpClient.post<any>(`http://localhost:5000/api/category`, category);
  }
}
