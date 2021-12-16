import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { AboutComponent } from './paginas/about/about.component';
import { MenuComponent } from './paginas/menu/menu.component';
import { ReservacionComponent } from './paginas/reservacion/reservacion.component';
import { ContactanosComponent } from './paginas/contactanos/contactanos.component';
import { BlogComponent } from './paginas/blog/blog.component';
import { LoginComponent } from './bloques/login/login.component';
import { AdminComponent } from './paginas/admin/admin.component';


const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'about', component: AboutComponent},
  {path:'menu', component: MenuComponent},
  {path:'reservacion', component: ReservacionComponent},
  {path:'contactanos', component: ContactanosComponent},
  {path:'blog', component: BlogComponent},
  {path:'login', component: LoginComponent},
  {path:'admin', component: AdminComponent},
  //{path:'**', pathMatch: 'full', redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
