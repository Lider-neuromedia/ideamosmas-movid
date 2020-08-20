import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParqueaderosService } from './servicios/parqueaderos.service';


@Component({
  selector: 'app-explorar-detalle',
  templateUrl: './explorar-detalle.component.html',
  styles: [
  ]
})
export class ExplorarDetalleComponent implements OnInit {

  parqueadero:any = {};
  @Input() index: any;

  constructor(private activateRoute:ActivatedRoute,
              private _parqueaderosService:ParqueaderosService)
  { 
    // this.activateRoute.params.subscribe(params => {
    //     this.parqueadero = this._parqueaderosService.getParqueadero(params['id']);
    // });
  }

  ngOnInit(){
    console.log(this.index);
    this.parqueadero = this._parqueaderosService.getParqueadero(this.index);
  }

}
