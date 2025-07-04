import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importamos los componentes que creamos
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Chat } from './pages/chat/chat';

const routes: Routes = [
  { path: '', component: Home }, // La ruta raíz muestra la landing page
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'chat', component: Chat },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Si no encuentra la ruta, redirige al inicio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }