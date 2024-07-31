import { Component } from '@angular/core';
import { NavigationMenuComponent } from "./navigation-menu/navigation-menu.component";
import { UserMenuComponent } from "./user-menu/user-menu.component";
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavigationMenuComponent, UserMenuComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../global.component.css']
})
export class HeaderComponent {

}
