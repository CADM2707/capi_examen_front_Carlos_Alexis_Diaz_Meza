import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuariosService } from "../usuarios.service";
@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

  usuarios: Usuario[] = []; 
  constructor(private servicioUsuario: UsuariosService) {
    this.servicioUsuario.getUsuarios().subscribe(usuarios => this.usuarios = usuarios);    
  }

  ngOnInit(): void {
  }


}
