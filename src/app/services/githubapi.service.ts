import {Injectable} from '@angular/core';
import * as global from '../global';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubapiService {
  public obtenerUsuarios = global.serverUrl + 'users';
  public busquedaUsuario = global.serverUrl + 'search/users?q=';

  constructor(private http: HttpClient) {

  }

  public obtenerTodosLosUsuarios() {
    return this.http.get(this.obtenerUsuarios);
  }

  public consultasGlobales(url:string)
  {
    return this.http.get(url);
  }

  public buscarUsuario(usuario: string) {
    let urlUsuario = this.busquedaUsuario + usuario;
    return this.http.get(urlUsuario);
  }

}
