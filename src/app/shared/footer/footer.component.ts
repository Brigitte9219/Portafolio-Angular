import { InfoPaginaService } from './../../services/info-pagina.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  anio:number =new Date().getFullYear();

  constructor(public _servicio: InfoPaginaService){}

}
