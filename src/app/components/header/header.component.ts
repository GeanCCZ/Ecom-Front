import { Component, OnInit} from '@angular/core';
import { NavigationMenuComponent } from "./navigation-menu/navigation-menu.component";
import { UserMenuComponent } from "./user-menu/user-menu.component";
import Icon from '../../domain/entities/icon.entity';
import Image from '../../domain/entities/image.entity';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavigationMenuComponent, UserMenuComponent,CommonModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../global.component.css']
})
export class HeaderComponent implements OnInit{

  searchIcon = new Icon('Search_Icon',new Image('search-icon.svg','Search Icon'))

  enableSearchBar = false;
  searchInput = ''
  
  showSearchBar(){console.log(this.searchInput)
    if(this.searchInput == '') this.enableSearchBar = !this.enableSearchBar;
  }
  ngOnInit(): void{};
}
