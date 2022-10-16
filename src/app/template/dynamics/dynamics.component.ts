import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Person {
  name:string;
  favorites: Favorite[];
}

interface Favorite {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.css']
})
export class DynamicsComponent {

  @ViewChild('dynamicForm')
  dynamicForm!: NgForm;

  person: Person = {
    name: 'Rolando Guerra',
    favorites: [
      { id: 1, name: 'Metal Gear' },
      { id: 2, name: 'Dragon ball xenoverse' },
    ]
  }

  newGame: string = '';

  nameIsInvalid() : boolean {
    return this.dynamicForm?.controls['name']?.invalid
      && this.dynamicForm?.controls['name']?.touched;
  }

  save() {
    this.dynamicForm.resetForm();
  }

  addNewGame() {
    const newGameObject: Favorite = {
      id: this.person.favorites.length + 1,
      name: this.newGame
    }

    this.person.favorites.push({ ...newGameObject });

    this.newGame = '';
  }

  remove(index: number) {
    this.person.favorites.splice(index, 1);
  }
}
