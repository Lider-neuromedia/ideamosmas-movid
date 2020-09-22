import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';

import { RegisterOtpComponent } from './auth/register/persona/register-otp/register-otp.component';
import { RegisterPersonaComponent } from './auth/register/persona/register-persona/register-persona.component';
import { RegisterPassComponent } from './auth/register/persona/register-pass/register-pass.component';

import { PersonaComponent } from './auth/register/persona/persona.component';
import { EmpresaComponent } from './auth/register/empresa/empresa.component';
import { DatosPersonalesComponent } from './cuenta/datos-personales/datos-personales.component';
import { ReservasComponent } from './cuenta/reservas/reservas.component';
import { FavoritosComponent } from './cuenta/favoritos/favoritos.component';
import { PagosComponent } from './cuenta/pagos/pagos.component';
import { ParqueaderosComponent } from './cuenta/parqueaderos/parqueaderos.component';
import { ParqueaderoComponent } from './cuenta/parqueaderos/parqueadero/parqueadero.component';
import { PromocionesComponent } from './cuenta/promociones/promociones.component';
import { EventosComponent } from './cuenta/eventos/eventos.component';
import { PaquetesComponent } from './cuenta/paquetes/paquetes.component';
import { ExplorarComponent } from './explorar/explorar.component';
import { ExplorarDetalleComponent } from './explorar/explorar-detalle.component';

const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {
        path: 'usuario',
        component: PersonaComponent,
        children: [
            {path: 'registro-otp', component: RegisterOtpComponent},
            {path: 'registro-persona', component: RegisterPersonaComponent},
            {path: 'registro-pass', component: RegisterPassComponent},
        ]
    },
    {path: 'registro-empresa', component: EmpresaComponent},
    {path: 'datos-personales', component: DatosPersonalesComponent},
    {path: 'reservas', component: ReservasComponent},
    {path: 'favoritos', component: FavoritosComponent},
    {path: 'metodos-de-pago', component: PagosComponent},
    {path: 'parqueaderos', component: ParqueaderosComponent},
    {path: 'parqueadero', component: ParqueaderoComponent},
    {path: 'promociones', component: PromocionesComponent},
    {path: 'eventos', component: EventosComponent},
    {path: 'paquetes', component: PaquetesComponent},
    {path: 'explorar', component: ExplorarComponent},
    {path: 'detalle/:id', component: ExplorarDetalleComponent},
    {path: '**', pathMatch: 'full', redirectTo: ''}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);