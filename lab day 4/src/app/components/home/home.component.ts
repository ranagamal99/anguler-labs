import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  imgSrc: String ;
  count: number = 0; 
gallery: String[]=[
'assets/images/1.jpg',
'assets/images/2.jpg',
'assets/images/3.jpg',
'assets/images/5.jpg',
]
constructor(){
this.imgSrc =this.gallery[0];

}
showGallery(e: Event){
  e.preventDefault();
  this.count++;

  if (this.count ===this.gallery.length){
    this.count =0;
  }
  this.imgSrc=this.gallery[this.count];
}

}
