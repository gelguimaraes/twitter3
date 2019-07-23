import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'twitter3';
  nome: string;
  idade: number;
  data: Date;

  constructor() {
    this.nome = 'Gesoaldo';
    this.idade = 38;
    this.data = new Date();
    console.log(`O sistema está sendo executado por ${this.nome}
       com idade ${this.idade.toString()} na data ${this.data.toDateString()}`);
  }

  getNome() {
    return this.nome;
  }
}
