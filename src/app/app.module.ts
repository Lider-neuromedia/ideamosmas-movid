import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';

import { APP_ROUTING } from './app.routes';

import { ParqueaderosService } from './explorar/servicios/parqueaderos.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './partials/footer/footer.component';
import { ChangeComponent } from './auth/change/change.component';
import { PersonaComponent } from './auth/register/persona/persona.component';
import { EmpresaComponent } from './auth/register/empresa/empresa.component';
import { DatosPersonalesComponent } from './cuenta/datos-personales/datos-personales.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { SidebarComponent } from './cuenta/sidebar/sidebar.component';
import { ReservasComponent } from './cuenta/reservas/reservas.component';
import { FavoritosComponent } from './cuenta/favoritos/favoritos.component';
import { PagosComponent } from './cuenta/pagos/pagos.component';
import { PromocionesComponent } from './cuenta/promociones/promociones.component';
import { EventosComponent } from './cuenta/eventos/eventos.component';
import { PaquetesComponent } from './cuenta/paquetes/paquetes.component';
import { ParqueaderosComponent } from './cuenta/parqueaderos/parqueaderos.component';
import { ParqueaderoComponent } from './cuenta/parqueaderos/parqueadero/parqueadero.component';
import { AgmCoreModule } from '@agm/core';
import { ExplorarComponent } from './explorar/explorar.component';
import { ExplorarDetalleComponent } from './explorar/explorar-detalle.component';
import { ExplorarParqueaderosComponent } from './explorar/explorar-parqueaderos.component';
import { Footer2Component } from './partials/footer2/footer2.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemMenuComponent } from './navbar/item-menu/item-menu.component';
import { ComoFuncionaComponent } from './navbar/como-funciona/como-funciona.component';
import { NecesitasAyudaComponent } from './navbar/necesitas-ayuda/necesitas-ayuda.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    PersonaComponent,
    EmpresaComponent,
    FooterComponent,
    ChangeComponent,
    DatosPersonalesComponent,
    CuentaComponent,
    SidebarComponent,
    ReservasComponent,
    FavoritosComponent,
    PagosComponent,
    PromocionesComponent,
    EventosComponent,
    PaquetesComponent,
    ParqueaderosComponent,
    ParqueaderoComponent,
    ExplorarComponent,
    ExplorarDetalleComponent,
    ExplorarParqueaderosComponent,
    Footer2Component,
    ItemMenuComponent,
    ComoFuncionaComponent,
    NecesitasAyudaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDqOcXeVSn9l5TM7nQrM7GGTKY6ppASdC4',
      libraries: ['places']
    })
  ],
  providers: [
    ParqueaderosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
