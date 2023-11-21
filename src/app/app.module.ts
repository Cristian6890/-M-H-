import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HistoriasComponent } from './historias/historias.component';
import { ContactoComponent } from './contacto/contacto.component';
import { UneteComponent } from './unete/unete.component';
import { MenuComponent } from './menu/menu.component';
import { BannerHistoriasComponent } from './banner-historias/banner-historias.component';
import { RecursosComponent } from './recursos/recursos.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { CompatirHistoriasComponent } from './compatir-historias/compatir-historias.component';



@NgModule({
  declarations: [ 
    AppComponent,
    InicioComponent,
    HistoriasComponent,
    ContactoComponent,
    UneteComponent,
    MenuComponent,
    BannerHistoriasComponent,
    RecursosComponent,
    ProyectoComponent,
    SobreMiComponent,
    CompatirHistoriasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
