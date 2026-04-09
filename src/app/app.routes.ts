import { Routes } from '@angular/router';
import { Landpage } from './pages/landpage/landpage';
import { RedesSistemas } from './pages/redes-sistemas/redes-sistemas';
import { Angular } from './pages/angular/angular';
import { Cv } from './pages/cv/cv';

export const routes: Routes = [
    { path: '', component: Landpage},
    { path: 'angular', component: Angular },
    { path: 'redes', component: RedesSistemas },
    { path: 'cv', component: Cv },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
