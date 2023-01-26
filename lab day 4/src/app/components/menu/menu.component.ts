import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMenuItem } from 'src/app/models/imenu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  itemId: number;
  menu: IMenuItem[];
  constructor(public activatedRoute: ActivatedRoute) {
    this.itemId = this.activatedRoute.snapshot.params['id'];
    ///////////////////////////////////////////////////////
    this.menu = [
      {
        img: 'assets/images/1.jpg',
        name: 'Coffe',
        description: 'Lorem ipsum dolor sit amet consectetur sit consectetur.',
        price: 15,
      },
      {
        img: 'assets/images/2.jpg',
        name: 'Coffe',
        description: 'Lorem ipsum dolor sit amet consectetur amet consectetur.',
        price: 15,
      },
      {
        img: 'assets/images/3.jpg',
        name: 'Coffe',
        description: 'Lorem ipsum dolor sit amet consectetur amet consectetur.',
        price: 15,
      },
      {
        img: 'assets/images/5.jpg',
        name: 'Coffe',
        description: 'Lorem ipsum dolor sit amet consectetur amet consectetur.',
        price: 15,
      },
      {
        img: 'assets/images/4.jpg',
        name: 'Coffe',
        description: 'Lorem ipsum dolor sit amet consectetur amet consectetur.',
        price: 15,
      },
      {
        img: 'assets/images/1.jpg',
        name: 'Coffe',
        description: 'Lorem ipsum dolor sit amet consectetur sit consectetur.',
        price: 15,
      },
      {
        img: 'assets/images/2.jpg',
        name: 'Coffe',
        description: 'Lorem ipsum dolor sit amet consectetur amet consectetur.',
        price: 15,
      },
      {
        img: 'assets/images/3.jpg',
        name: 'Coffe',
        description: 'Lorem ipsum dolor sit amet consectetur amet consectetur.',
        price: 15,
      },
     
    ];
  }
  ngOnInit(): void {}
}
