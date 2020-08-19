import { Injectable } from '@angular/core';

@Injectable()
export class ParqueaderosService {

    private parqueaderos:Parqueadero[] = [
        {
            nombre: "Parqueadero prueba 1",
            precio: 5.000,
            img: "assets/img/explorar/image.png"
        },
        {
            nombre: "Parqueadero prueba 2",
            precio: 10.000,
            img: "assets/img/explorar/image.png"
        },
        {
            nombre: "Parqueadero prueba 3",
            precio: 8.000,
            img: "assets/img/explorar/image.png"
        },
        {
            nombre: "Parqueadero prueba 4",
            precio: 3.000,
            img: "assets/img/explorar/image.png"
        },
    ];

    constructor(){
        console.log('Servicio Listo para usar');
    }

    getParqueaderos(){
        return this.parqueaderos;
    }

    getParqueadero( idx: string ){
        return this.parqueaderos[idx];
    }
}

export interface Parqueadero{
    nombre: string;
    precio: number;
    img: string;
}