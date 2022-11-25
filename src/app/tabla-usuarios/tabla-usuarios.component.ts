import {Component} from '@angular/core';
import {PrimeNGConfig, SelectItemGroup} from 'primeng/api';
import {GithubapiService} from '../services/githubapi.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent {

  usuarios: any[] = [];
  usuarioSeleccionado!: any[];

  constructor(private primengConfig: PrimeNGConfig, private _githubapiService: GithubapiService) {
  }

  usuarioSeleccionadoTabla(usuario: any) {
    this._githubapiService.consultasGlobales(usuario.usuario.url).subscribe((data: any) => {
      let nombreUsuario = document.getElementById('nombreUsuario');
      nombreUsuario!.innerHTML = data.login;
      let imagenUsuario = document.getElementById('imagenUsuario');
      imagenUsuario!.setAttribute('src', data.avatar_url);
      let btnGithub = document.getElementById('btnGithub');
      btnGithub!.setAttribute('href', data.html_url);
      let usuarioGithub = document.getElementById('usuarioGithub');
      usuarioGithub!.innerHTML = '@' + data.login;
      let seguidores = document.getElementById('seguidores');
      seguidores!.innerHTML = 'Seguidores: ' + data.followers;
      let siguiendo = document.getElementById('siguiendo');
      siguiendo!.innerHTML = 'Siguiendo: ' + data.following;
      let repositorios = document.getElementById('repositorios');
      repositorios!.innerHTML = 'Repositorios: ' + data.public_repos;
      let informacion = document.getElementById('informacion');
      informacion!.setAttribute('style', 'display: block;');
    });
  }

  onInput() {
    let valorInput = (document.getElementById("inputBusqueda") as HTMLInputElement).value;
    if (valorInput == "") {
      this._githubapiService.obtenerTodosLosUsuarios().subscribe((data: any) => {
        this.usuarios = data;
      });
    }
  }

  busquedaUsuario() {
    let valorInput = (document.getElementById("inputBusqueda") as HTMLInputElement).value;
    this._githubapiService.buscarUsuario(valorInput).subscribe((data: any) => {
      this.usuarios = data.items;
    });
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this._githubapiService.obtenerTodosLosUsuarios().subscribe((data: any) => {
      this.usuarios = data;
    });
  }
}
