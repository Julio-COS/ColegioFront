import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  activate:boolean=true;

  @Output() showNavigate: EventEmitter<any> = new EventEmitter<any>();

  actionShowNavigate(){
    this.activate= !this.activate
    this.showNavigate.emit(this.activate);
  }
}
