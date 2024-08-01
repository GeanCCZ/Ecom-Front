import { Component, Input } from '@angular/core';
import RedirectIcon from '../../../domain/entities/redirect-icon.entity';
import Image from '../../../domain/entities/image.entity';


@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [],
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css','../../global.component.css']
})
export class UserMenuComponent {

    
  userIcon = new RedirectIcon('User_Icon',true,"/profile",new Image("user-icon.svg",'User image'))
}
