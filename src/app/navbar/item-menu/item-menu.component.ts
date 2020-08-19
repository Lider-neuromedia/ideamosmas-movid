import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.css'],
  host: {'class': 'collapse navbar-collapse','id': 'navbarSupportedContent'}
})
export class ItemMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
