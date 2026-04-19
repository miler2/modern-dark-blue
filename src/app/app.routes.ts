import { Routes } from '@angular/router';
import { Landpage } from './pages/landpage/landpage';
import { RedesSistemas } from './pages/redes-sistemas/redes-sistemas';
import { Angular } from './pages/angular/angular';

export const routes: Routes = [
    { path: '', component: Landpage},
    { path: 'angular', component: Angular },
    { path: 'redes', component: RedesSistemas },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
