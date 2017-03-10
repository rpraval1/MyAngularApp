import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html'
})

export class NavBarComponent {
  name: String;

  constructor(){
    this.name = 'Pravallika';
  }
}
