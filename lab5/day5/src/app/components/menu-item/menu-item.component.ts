import { Component, Input } from '@angular/core';
import { IMenuItem } from 'src/app/models/imenu-item';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
})
export class MenuItemComponent {
  @Input() item: IMenuItem = {
    id: 0,
    img: '',
    name: '',
    description: '',
    price: 0,
  };
  constructor(private menuService: MenuService) {}
  editItem(itemId: number) {
    let newItem: any = this.item;
    newItem.img = prompt('Edit Image', String(this.item.img));
    newItem.name = prompt('Edit Name', String(this.item.name));
    newItem.description = prompt(
      'Edit Description',
      String(this.item.description)
    );
    newItem.price = prompt('Edit Price', String(this.item.price));

    this.menuService.editItem(itemId, newItem);
  }
  deleteItem(itemId: number) {
    this.menuService.deleteItem(itemId).subscribe((response) => {
      console.log(response);
    });
  }
}
