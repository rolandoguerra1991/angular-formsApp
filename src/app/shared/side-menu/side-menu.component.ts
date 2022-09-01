import { Component } from '@angular/core';

interface MenuItem {
  text: string,
  url: string
}
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  templateMenu: MenuItem[] = [
    {
      text: 'Basics',
      url: 'template/basics'
    },
    {
      text: 'Dynamics',
      url: 'template/dynamics'
    },
    {
      text: 'Switches',
      url: 'template/switches'
    },
  ];

  reactiveMenu: MenuItem[] = [
    {
      text: 'Basics',
      url: 'reactive/basics'
    },
    {
      text: 'Dynamics',
      url: 'reactive/dynamics'
    },
    {
      text: 'Switches',
      url: 'reactive/switches'
    },
  ];

}
