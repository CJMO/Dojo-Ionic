import { Component } from '@angular/core';
import {GithubProvider} from '../../providers/github/github';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GithubProvider]
})
export class HomePage {

  informacion :any = [];
  avatar_url : any;

  constructor(private _github: GithubProvider) {

  }

  funcionClick(){
    console.log("Destruido");
    this._github.buscarUsuario("CJMO").then(respuesta=>{
      this.informacion = respuesta;
      console.log(this.informacion);
    })
  }

}
