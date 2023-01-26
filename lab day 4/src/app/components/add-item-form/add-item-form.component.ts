import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css'],
})
export class AddItemFormComponent {
  constructor() {}
  itemForm = new FormGroup({
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
    if (this.itemForm.value) {
      //add to API
    }
  }
}
