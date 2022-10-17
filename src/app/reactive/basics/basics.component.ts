import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {

  myForm: FormGroup = this.formBuilder.group({
    product: [null, [
      Validators.required,
      Validators.minLength(3)
    ]],
    price: [null, [
      Validators.required,
      Validators.min(0)
    ]],
    stock: [null, [
      Validators.required,
      Validators.min(0)
    ]],
  })


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myForm.setValue({
      product: 'RTX 4080ti',
      price: 1500,
      stock: 10,
    })
  }

  invalidField(field: string) {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }

  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value)

    this.myForm.reset();
  }
}
