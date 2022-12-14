import { ListaItem } from './lista-item.model';

export class Lista{

    id: number;
    titulo: string;
    creadeEn: Date;
    terminadaEn: Date;
    completada: boolean;
    items: ListaItem[];

    constructor(titulo: string){

        this.id = new Date().getTime();        
        this.titulo = titulo;
        this.creadeEn = new Date();
        this.completada = false;
        this.items = [];
        

    }

}