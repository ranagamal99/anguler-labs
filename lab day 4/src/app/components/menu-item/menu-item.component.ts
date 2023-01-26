import { Component, Input } from '@angular/core';
import { IMenuItem } from 'src/app/models/imenu-item';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
})
export class MenuItemComponent {
  @Input() item: IMenuItem = {
    img: '',
    name: '',
    description: '',
    price: 0,
  };
  editItem() {}
  deleteItem() {}
}
