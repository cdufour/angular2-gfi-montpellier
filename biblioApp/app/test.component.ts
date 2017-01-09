import { Component } from '@angular/core';

@Component({
  selector: 'test',
  template: `
  <h1>{{title}}</h1>
  <p>Je m'appelle {{name}}</p>
  <p>Langues parlées:</p>
  <ul>
    <li
      *ngFor="let lang of languages"
      (click)="displayMessage(lang.name)" >
      {{lang.name}} <span>({{lang.acronym}})</span>
      <img style="height:30px" [src]="lang.flag">
    </li>
  </ul>
  <p>{{message}}</p>
  `,
})
export class TestComponent  {
  name: string = 'Chris';
  title: string = 'Test Component';
  message: string = '';

  languages: any[] = [
    {
      name: 'français',
      acronym: 'fr',
      flag: 'https://cdn2.iconfinder.com/data/icons/european-rounded-square-flags/512/france_french_national_country_flag-128.png'
    },
    {
      name: 'anglais',
      acronym: 'en',
      flag: 'https://cdn2.iconfinder.com/data/icons/european-rounded-square-flags/512/france_french_national_country_flag-128.png'
    },
    {
      name: 'italien',
      acronym: 'it',
      flag: 'https://cdn2.iconfinder.com/data/icons/european-rounded-square-flags/512/france_french_national_country_flag-128.png'
    },
  ];

  displayMessage(lang: string): void {
    this.message = "Je parle " + lang;
  }

}
