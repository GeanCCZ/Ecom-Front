import { Component, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import Icon from '../../../domain/entities/icon.entity';
import Image from '../../../domain/entities/image.entity';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation-menu',
  standalone: true,
  templateUrl: './navigation-menu.component.html',
  imports: [MatIconModule, CommonModule], // Certifique-se de que CommonModule está aqui
  styleUrls: ['./navigation-menu.component.css', '../../global.component.css']
})
export class NavigationMenuComponent {

  navigationMenuIcon = new Icon('Navigation-Menu_Icon', new Image('menu-icon.svg', 'Navigation menu icon'));

  @Output() enableSideBar = false;

  sideBarIcons: any[] = [];

  showSideBar() {
    console.log(``);
    this.enableSideBar = !this.enableSideBar;
    console.log(this.enableSideBar);
  }

  ngOnInit() {
    this.sideBarIcons = [
      {
        label: 'Home',
        redirect: true,
        redirect_route: '/home',
        image: new Image('home-icon.svg', 'Home icon')
      },
      {
        label: 'About',
        redirect: true,
        redirect_route: '/about',
        image: new Image('about-icon.svg', 'About icon')
      },
      {
        label: 'Contact',
        redirect: true,
        redirect_route: '/contact',
        image: new Image('contact-icon.svg', 'Contact icon')
      }
    ];
  }
}