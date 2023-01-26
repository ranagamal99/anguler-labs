import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css'],
})
export class AddItemFormComponent {
  constructor(private menuService: MenuService) {}
  itemForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.min(0)]),
    image: new FormControl('', [Validators.required]),
    name: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z]+$/),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ]),
    price: new FormControl('', [
      Validators.required,
      Validators.min(5),
      Validators.max(50),
    ]),
  });
  get getId() {
    return this.itemForm.controls['id'];
  }
  get getImage() {
    return this.itemForm.controls['image'];
  }
  get getName() {
    return this.itemForm.controls['name'];
  }
  get getDescription() {
    return this.itemForm.controls['description'];
  }
  get getPrice() {
    return this.itemForm.controls['price'];
  }

  addItem() {
    if (this.itemForm.status != 'INVALID') {
      this.menuService.addItem(this.itemForm.value).subscribe((response) => {
        console.log(response);
      });
    }
  }
}
