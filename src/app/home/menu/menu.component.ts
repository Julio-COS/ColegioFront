import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../../service/connection.service';
import { User } from '../../interface/user';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent{
  activate:boolean=true;
  width:string="w-full";
  showFiller = false;

}
