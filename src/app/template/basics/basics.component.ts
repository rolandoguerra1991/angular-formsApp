import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {
  @ViewChild('myForm') myForm!: NgForm;

  initForm = {
    product: 'Redmi note 8',
    price: 150,
    stock: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.myForm.resetForm({
      stock: 0,
      price: 0,
    })
  }

  nameValid():boolean {
    return this.myForm?.controls['product']?.invalid
      && this.myForm?.controls['product']?.touched
  }

  priceValid():boolean {
    return this.myForm?.controls['price']?.value < 0
      && this.myForm?.controls['price']?.touched;
  }
}
