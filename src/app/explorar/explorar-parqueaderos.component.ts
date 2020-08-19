import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
// import { ParqueaderosService, Parqueadero } from './servicios/parqueaderos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-explorar-parqueaderos',
  templateUrl: './explorar-parqueaderos.component.html',
  styles: [
  ]
})
export class ExplorarParqueaderosComponent implements OnInit {

  @Input() parqueadero: any = {};
  @Input() index: number;

  @Output() parqueaderoSelection: EventEmitter<number>;

  constructor(private router: Router){
    this.parqueaderoSelection = new EventEmitter();
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  verParqueadero(){
    // this.router.navigate(['/detalle', this.index]);
    this.parqueaderoSelection.emit(this.index);
  }
}


