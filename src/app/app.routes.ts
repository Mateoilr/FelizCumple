import { Routes } from '@angular/router';
import { CartaComponent } from '../carta/carta.component';
import { FuegosComponent } from '../fuegos/fuegos.component';

export const routes: Routes = [
    {
        path: 'Carta',
        component: CartaComponent 
    },
    {   path: 'Fuego',
        component: FuegosComponent
     },
    {
        path: '**',
        redirectTo: 'Carta'
    }
];
