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
  about_me = '';

  anio = new Date().getFullYear();
}
