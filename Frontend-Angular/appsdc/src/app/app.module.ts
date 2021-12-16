import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReservaService} from './bloques/reserva/reserva.service';
import { UsersService } from './services/user.service';
import { ProductoService } from './services/producto.service';
import { EmpleadoService } from './services/empleado.service';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloadComponent } from './preload/preload.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { MenuComponent } from './paginas/menu/menu.component';
import { WelcomeComponent } from './bloques/welcome/welcome.component';
import { CategoriasComponent } from './bloques/categorias/categorias.component';
import { PopularesComponent } from './bloques/populares/populares.component';
import { TestimoniosComponent } from './bloques/testimonios/testimonios.component';
import { EventosComponent } from './bloques/eventos/eventos.component';
import { SuscripcionComponent } from './bloques/suscripcion/suscripcion.component';
import { PresentacionComponent } from './bloques/presentacion/presentacion.component';
import { AboutComponent } from './paginas/about/about.component';
import { WelcomeAboutComponent } from './bloques/welcome-about/welcome-about.component';
import { StaffComponent } from './bloques/staff/staff.component';
import { WelcomeMenuComponent } from './bloques/welcome-menu/welcome-menu.component';
import { CartaComponent } from './bloques/carta/carta.component';
import { ReservacionComponent } from './paginas/reservacion/reservacion.component';
import { WelcomeReservationComponent } from './bloques/welcome-reservation/welcome-reservation.component';
import { ReservaComponent } from './bloques/reserva/reserva.component';
import { BlogCabeceraComponent } from './bloques/blog-cabecera/blog-cabecera.component';
import { BlogDetailComponent } from './bloques/blog-detail/blog-detail.component';
import { BlogComponent } from './paginas/blog/blog.component';
import { WelcomeBlogComponent } from './bloques/welcome-blog/welcome-blog.component';
import { WelcomeBlogdetailComponent } from './bloques/welcome-blogdetail/welcome-blogdetail.component';
import { ContactanosComponent } from './paginas/contactanos/contactanos.component';
import { WelcomeContactComponent } from './bloques/welcome-contact/welcome-contact.component';
import { ContactoComponent } from './bloques/contacto/contacto.component';
import { LoginComponent } from './bloques/login/login.component';
import { AdminComponent } from './paginas/admin/admin.component';
import { ModalComponent } from './bloques/modal-carta/modal-carta.component';
import { ModalPersonalComponent } from './bloques/modal-personal/modal-personal.component';
import { ModalPopularesComponent } from './bloques/modal-populares/modal-populares.component';
import { ModalEventosComponent } from './bloques/modal-eventos/modal-eventos.component';
import { ModalPresentacionComponent } from './bloques/modal-presentacion/modal-presentacion.component';
import { ModalCategoriaComponent } from './bloques/modal-categoria/modal-categoria.component';

//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PreloadComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    WelcomeComponent,
    CategoriasComponent,
    PopularesComponent,
    TestimoniosComponent,
    EventosComponent,
    SuscripcionComponent,
    PresentacionComponent,
    AboutComponent,
    MenuComponent,
    WelcomeAboutComponent,
    StaffComponent,
    WelcomeMenuComponent,
    CartaComponent,
    ReservacionComponent,
    WelcomeReservationComponent,
    ReservaComponent,
    BlogCabeceraComponent,
    BlogDetailComponent,
    BlogComponent,
    WelcomeBlogComponent,
    WelcomeBlogdetailComponent,
    ContactanosComponent,
    WelcomeContactComponent,
    ContactoComponent,
    LoginComponent,
    AdminComponent,
    ModalComponent,
    ModalPersonalComponent,
    ModalPopularesComponent,
    ModalEventosComponent,
    ModalPresentacionComponent,
    ModalCategoriaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [ReservaService,UsersService,CookieService,ProductoService,EmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
