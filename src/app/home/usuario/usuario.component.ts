import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../../service/connection.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit{
  usuarios:any=[];
  tabla:string="Getusuario"

  constructor(private apiConnection:ConnectionService){}

  ngOnInit(): void {
    this.apiConnection.getData(this.tabla).subscribe(data => {
      this.usuarios = data;
    });
  }
}
