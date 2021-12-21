import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { ResidenteComponent } from './pages/residente/residente.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/menu' },
  { 
    path: 'menu', component:MenuComponent,
    children:[
      {path:'welcome',component:WelcomeComponent},
      {path:'residente',component:ResidenteComponent}
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
