import { Component, Input, input } from '@angular/core';
import { NavigationMenuComponent } from "./navigation-menu/navigation-menu.component";
import { UserMenuComponent } from "./user-menu/user-menu.component";
import Icon from '../../domain/entities/icon.entity';
import Image from '../../domain/entities/image.entity';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavigationMenuComponent, UserMenuComponent,CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../global.component.css']
})
export class HeaderComponent {

  searchIcon = new Icon('Search_Icon',new Image('search-icon.svg','Search Icon'))

  @Input() enableSearchBar = false;

  
  showSearchBar(){
    this.enableSearchBar = !this.enableSearchBar;
  }

}
