import { Component, Input, OnInit } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Router } from '@angular/router';
import { Lista } from '../../models/lista.model';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @Input() terminada = true; 

  constructor(public  deseosService: DeseosService, public router: Router, private alert: AlertController) { }

  ngOnInit() {}

  listaSeleccionada(lista: Lista){

    if(this.terminada){
      this.router.navigateByUrl(`tabs/tab2/agregar/${ lista.id }`);
    }else{
      this.router.navigateByUrl(`tabs/tab1/agregar/${ lista.id }`);
    }
  }

  borrarLista(lista: Lista){

    this.deseosService.borrarLista(lista);
  }

  async editarLista(lista: Lista){
    
    const alert = await this.alert.create({
      header: 'Editar Lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: lista.titulo
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

            const id = this.deseosService.editarLista(lista, data.titulo);
            


          }
        }
      ]
    });

    await alert.present();

  }

  
  

}
