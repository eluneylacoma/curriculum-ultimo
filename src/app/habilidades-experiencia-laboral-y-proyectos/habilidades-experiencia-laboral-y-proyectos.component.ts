import { Component } from '@angular/core';
import { JsonService } from '../Elu/json.service';
import { MiServicioService } from '../services/mi-servicio.service';

@Component({
  selector: 'app-habilidades-experiencia-laboral-y-proyectos',
  templateUrl: './habilidades-experiencia-laboral-y-proyectos.component.html',
  styleUrls: ['./habilidades-experiencia-laboral-y-proyectos.component.css']
})
export class HabilidadesExperienciaLaboralYProyectosComponent {


  Habilidades: any;


constructor(private miSevicio: MiServicioService){

}

ngOnInit(){
    this.miSevicio.obtenerData().subscribe({
      next: (data: any) => {
        this.Habilidades = data["Habilidades"];
        console.log(data["Habilidades"]);
      },
      error: (err: any) =>{
        alert("Ocurrió un error inesperado")
        console.log(err);
      }
    });
  }


}
