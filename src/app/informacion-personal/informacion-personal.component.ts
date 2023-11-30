import { Component, OnInit } from '@angular/core';
import { JsonService } from '../Elu/json.service';
import { MiServicioService } from '../services/mi-servicio.service';

@Component({
  selector: 'app-informacion-personal',
  templateUrl: './informacion-personal.component.html',
  styleUrls: ['./informacion-personal.component.css']
})
export class InformacionPersonalComponent {

  datosPersonales: any;
 

constructor(private myService:MiServicioService){

}

ngOnInit(){
    this.myService.obtenerData().subscribe({
      next: (data: any) => {
        this.datosPersonales = data["DatosPersonales"];
        console.log(data["DatosPersonales"]);
      },
      error: (err: any) =>{
        alert("Ocurrió un error inesperado")
        console.log(err);
      }
    });
  }
}