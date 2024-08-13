import { Component, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import Icon from '../../../domain/entities/icon.entity';
import Image from '../../../domain/entities/image.entity';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation-menu',
  standalone: true,
  imports: [MatIconModule,CommonModule],
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css','../../global.component.css']
})

export class NavigationMenuComponent {

  navigationMenuIcon = new Icon('Navigation-Menu_Icon',new Image('menu-icon.svg','Navigation menu icon'))

  @Output() enableSideBar = false;

  showSideBar(){
    console.log(``)
    this.enableSideBar = !this.enableSideBar
    console.log(this.enableSideBar)
  }
}
