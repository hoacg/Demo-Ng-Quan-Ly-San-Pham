import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DanhMucService {

  categories: any[] = [
    'Điện thoại',
    'Laptop'
  ];

  constructor() { }

  getCategories(): any[] {
    return this.categories;
  }

  addCategory(name: string) {
    this.categories.push(name);
  }
}
