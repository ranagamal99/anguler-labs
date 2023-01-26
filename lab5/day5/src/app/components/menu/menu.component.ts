import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMenuItem } from 'src/app/models/imenu-item';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  itemId: number;
  menu: any = [];
  constructor(
    public activatedRoute: ActivatedRoute,
    private menuService: MenuService
  ) {
    this.itemId = this.activatedRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    if (this.itemId) this.getMenuItem(this.itemId);
    else this.getItems();
  }
  getMenuItem(id: number) {
    this.menuService.getItemById(id).subscribe((response) => {
      this.menu.push(response);
    });
  }
  getItems() {
    this.menuService.getAllItems().subscribe((response) => {
      this.menu = response;
    });
  }
}
