import { utf8Encode } from '@angular/compiler/src/util';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl:'app.component.html'

})
export class AppComponent {
  nomeCompleto = 'Danilo de Viveiros Ribeiro';
  nomeGuia = 'Alexander'
  turma = 'turma 8';
  data = Date.now()
}
