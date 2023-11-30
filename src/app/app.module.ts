import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InformacionPersonalComponent } from './informacion-personal/informacion-personal.component';
import { InfromacionAcademicaComponent } from './infromacion-academica/infromacion-academica.component';
import { FooterComponent } from './footer/footer.component';
import { FotosComponent } from './fotos/fotos.component';
import { HttpClientModule} from '@angular/common/http';
import { HabilidadesExperienciaLaboralYProyectosComponent } from './habilidades-experiencia-laboral-y-proyectos/habilidades-experiencia-laboral-y-proyectos.component';
@NgModule({
  declarations: [
    AppComponent,
    InformacionPersonalComponent,
    InfromacionAcademicaComponent,
    FooterComponent,
    FotosComponent,
    HabilidadesExperienciaLaboralYProyectosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
