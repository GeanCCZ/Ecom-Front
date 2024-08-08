import { Component, Input, OnInit, Output} from '@angular/core';
import { NavigationMenuComponent } from "./navigation-menu/navigation-menu.component";
import { UserMenuComponent } from "./user-menu/user-menu.component";
import Icon from '../../domain/entities/icon.entity';
import Image from '../../domain/entities/image.entity';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
} from '@angular/forms';
import { ICollapseScreenWidth } from '../../domain/interfaces/ICollapseScreenWidth';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavigationMenuComponent, UserMenuComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../global.component.css']
})
export class HeaderComponent implements OnInit{

  screenWidth = 0;

  searchIcon = new Icon('Search_Icon',new Image('search-icon.svg','Search Icon'))

  @Output() enableSearchBar = false;
  @Input() searchInput: string = '';
  
  fillSearchInputField(event: Event) {
    console.log((event.target as HTMLInputElement)?.value)
    
    if((event.target as HTMLInputElement)?.value == ''){ return}
    
    this.searchInput = (event.target as HTMLInputElement)?.value
  }

  showSearchBar(data: ICollapseScreenWidth) {
    this.screenWidth = data.screenWidth;
    if (this.searchInput == '' || this.enableSearchBar === false) {
      this.enableSearchBar = !this.enableSearchBar
    };



  }


  ngOnInit(): void{};
}
