import { Component } from '@angular/core';
import { GithubProvider } from'../../providers/github/github'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  comoquieran:any=[]
  constructor(private _github: GithubProvider) {

  }
funcionDojo(){
  console.log("Dojo ionic");
  this._github.buscarUsuario("kasolopera1007")
  .then((data)=>{
    this.comoquieran=data
    console.log(this.comoquieran)
  }
);

}
}
