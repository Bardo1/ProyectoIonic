import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { MasinfoPage } from '../masinfo/masinfo';
import { AboutPage } from '../about/about';
import { Proveedor1Provider } from '../../providers/proveedor1/proveedor1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alerta:AlertController,public proveedor: Proveedor1Provider) {
  }
  
  usuarios
  
  ionViewDidLoad(){
    this.proveedor.obtenerDatos()
    .subscribe(
      (data)=>{this.usuarios = data;},
      (error)=>{console.log(error);}
    )
  }


  alertaBasica(){
    let miAlerta = this.alerta.create({
      title: "titulo de alerta",
      message: "mensaje de alerta",
      buttons: ["esto era el button array"]
    });
    miAlerta.present();
  }

  alertaBasica2(){
    let miAlerta2 = this.alerta.create({
      title: "titulo de alerta",
      message: "mensaje de alerta",
      inputs:[{
       name: "nombre de turno",
       placeholder:""
      }],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    miAlerta2.present();
  }
  
  otraPagina(){
  	this.navCtrl.push(AboutPage);
  }

}
