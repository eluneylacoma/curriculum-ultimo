import { Component, OnInit } from '@angular/core';
import { JsonService } from '../Elu/json.service';
import { MiServicioService } from '../services/mi-servicio.service';

@Component({
  selector: 'app-infromacion-academica',
  templateUrl: './infromacion-academica.component.html',
  styleUrls: ['./infromacion-academica.component.css']
})
export class InfromacionAcademicaComponent {

  informacionAcademica: any;
  

constructor(private myService: MiServicioService){

}

ngOnInit(){
    this.myService.obtenerData().subscribe({
      next: (data: any) => {
        this.informacionAcademica = data["InformacionAcademica"];
        console.log(data["InformacionAcademica"]);
      },
      error: (err: any) =>{
        alert("Ocurrió un error inesperado")
        console.log(err);
      }
    });
  }
}

