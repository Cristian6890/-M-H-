import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HistoriasComponent } from './historias/historias.component';
import { ContactoComponent } from './contacto/contacto.component';
import { UneteComponent } from './unete/unete.component';
import { BannerHistoriasComponent } from './banner-historias/banner-historias.component';
import { RecursosComponent } from './recursos/recursos.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { CompatirHistoriasComponent } from './compatir-historias/compatir-historias.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'historias', component: HistoriasComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'unete', component: UneteComponent },
  { path: 'bannerhistorias', component: BannerHistoriasComponent },
  { path: 'recursos', component: RecursosComponent },
  { path: 'proyecto', component: ProyectoComponent },
  { path: 'sobre-mi', component: SobreMiComponent },
  { path: 'compartir-historias', component: CompatirHistoriasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
