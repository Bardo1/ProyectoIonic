import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  
  lista: Array<any> = [
  {
    titulo:"Perro",
    color: "#ff0000"
  },
  {
    titulo: "Gato",
    color: "#999"  
  },
  {
    titulo: "Velociraptor",
    color: "#ff0000"  
  }
  ,
  {
    titulo: "Cangrejo",
    color: "#ff0000"
  }
  ,
  {
    titulo: "PuercoEspin",
    color: "#ff0000" 
  }
 ]

  constructor(public navCtrl: NavController) {

  }

}
