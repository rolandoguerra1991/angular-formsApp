import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.css']
})
export class DynamicsComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    name: [null, [Validators.required, Validators.minLength(3)]],
    favorites: this.fb.array([
      this.fb.control('Metal Gear'),
      this.fb.control('Dragon Ball Xenoverse')
    ], Validators.required)
  });

  newFavorite: FormControl = this.fb.control('', Validators.required);

  constructor(private fb: FormBuilder) { }

  get favorites() {
    return this.myForm.get('favorites') as FormArray;
  }

  ngOnInit(): void {
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

  addFavorite() {
    this.favorites.push(this.fb.control(this.newFavorite.value, Validators.required));
    this.newFavorite.reset();
  }
  removeFavorite(index: number) {
    this.favorites.removeAt(index);
  }
}
