import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  baseUrl = 'http://localhost:3000/items';
  constructor(private client: HttpClient) {}

  getAllItems() {
    return this.client.get(this.baseUrl);
  }
  getItemById(itemId: any) {
    return this.client.get(`${this.baseUrl}/${itemId}`);
  }

  addItem(item: any) {
    return this.client.post(`${this.baseUrl}`, item);
  }

  editItem(itemId: any, item: any) {
    return this.client.put(`${this.baseUrl}/${itemId}`, item);
  }

  deleteItem(itemId: any) {
    return this.client.delete(`${this.baseUrl}/${itemId}`);
  }
}
