import { Component, OnInit} from '@angular/core';
import { ParqueaderosService, Parqueadero } from './servicios/parqueaderos.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-explorar',
    templateUrl: './explorar.component.html',
    styleUrls: ['./explorar.component.css']
  })
export class ExplorarComponent implements OnInit {

  parqueaderos: Parqueadero[] = [];
  state = 'explorar';
  selectedIndex = 0;

  constructor(private _parqueaderosService: ParqueaderosService,
              private router: Router) {
  }

  ngOnInit() {
    this.parqueaderos = this._parqueaderosService.getParqueaderos();
  }

  verParqueadero( idx: number ){
    this.state = 'detalle';
    this.selectedIndex = idx;
    // this.router.navigate( ['/detalle', idx] );
  }
}



