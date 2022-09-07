import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Alert } from 'selenium-webdriver';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public deseosService: DeseosService, private router: Router, private alert: AlertController) {

  }

  async agregarLista(){

    const alert = await this.alert.create({
      header: 'Nueva Lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: ()=>{
            console.log('Cancelado');
          }
        },
        {
          text: 'Crear',
          handler: (data)=>{
            
            if(data.titulo.length === 0){
              return;
            }

            const id = this.deseosService.crearLista(data.titulo);
            
            this.router.navigateByUrl(`tabs/tab1/agregar/${ id }`);

          }
        }
      ]
    });

    await alert.present();

  }

  

}
