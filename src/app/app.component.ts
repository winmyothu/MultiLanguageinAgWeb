import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-translation';

  constructor(  public translate: TranslateService){
    translate.addLangs(['en','my']);

    translate.setDefaultLang('en');
  }

  switchLang(lang: string) {

    this.translate.use(lang);

  }
}
