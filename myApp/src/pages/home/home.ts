import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MasinfoPage } from '../masinfo/masinfo';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  otraPagina(){
  	this.navCtrl.push(MasinfoPage);
  }

}
