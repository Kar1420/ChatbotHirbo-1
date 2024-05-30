import { UsuarioComponent } from './modules/usuario/usuario.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { ListUsuarioComponent } from './modules/list-usuario/list-usuario.component';
import { SidebarComponent } from './modules/sidebar/sidebar.component';
import { AdminDashboardComponent } from './modules/admin-dashboard/admin-dashboard.component';
import { AgregarOrgComponent } from './modules/agregar-org/agregar-org.component';
import { ListQrComponent } from './modules/list-qr/list-qr.component';
import { HomeComponent } from './home/home.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';


export const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  {path:'Home',component:HomeComponent},
  {path:'registroUsuario',component: RegistroUsuarioComponent},
  {path:'',component:LoginComponent,
    children:[
      { path: 'login', component: LoginComponent },
    ],
  },



  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'listaUsuario', component: ListUsuarioComponent },
      { path: 'agregar-org', component: AgregarOrgComponent },
      { path: 'lista-qr', component: ListQrComponent },

    ],
  },
];


@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
