import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: any[] = [];

  constructor() {

    this.cargarStorage();

  }

   crearLista(titulo: string){

    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);

    this.guardarStorage();

    return nuevaLista.id;

   }

   obtenerLista(id: string |number): Lista{

    id = Number(id);

    return this.listas.find( listaData => listaData.id === id );

   }

   borrarLista(lista: Lista){
    this.listas = this.listas.filter(listaData => listaData.id !== lista.id );

    this.guardarStorage();
   }

   editarLista(listaR: Lista, titulo: string): boolean{


    this.listas.forEach(lista => {
      if(lista.id === listaR.id){
        lista.titulo = titulo;
        this.guardarStorage();
        return true;
      }
    });

    return false;
    
   }

   guardarStorage(){

    localStorage.setItem('data', JSON.stringify(this.listas));

   }

   cargarStorage(){

    if(JSON.parse(localStorage.getItem('data')))
      this.listas = JSON.parse( localStorage.getItem('data') );
    else
      this.listas = [];
   }

   


}
