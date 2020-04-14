import { Component } from '@angular/core';
declare var jQuery: any;
declare var $: any;

declare var module: NodeModule;
interface NodeModule {
  id: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  name = 'Maria Antonieta Pampena';
  title = 'Internista - Nefrólogo';
  aboutMe = 'Soy una profesional orientada a la salud, no sólo de mis pacientes sino de todo aquél ser que viva, también soy fiel creyente y aferrada a la voluntad de Dios. Enfocada en este orden para prestar sun servicio de calidad a la humnidad y hacer de este mundo un lugar mejor. ';

  anio = new Date().getFullYear();
}
