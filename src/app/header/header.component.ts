import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Component, HostListener, OnInit, } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgIf, NgClass, CommonModule,TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent  {
  language: string = ''

  selectedLanguage: string = 'en'; 
  selectedCurrency: string = 'gel'; 

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang(this.selectedLanguage);
    localStorage.setItem('selectedLanguage', JSON.stringify("en"))


  }

  switchLanguage(language: string) {
    this.selectedLanguage = language;
    this.translateService.use(language);
    localStorage.removeItem("selectedLanguage")
    localStorage.setItem('selectedLanguage', JSON.stringify(language))
  
  }

  getLanguageName(): string {
    // Replace with actual translations as per your JSON files
    return this.selectedLanguage === 'en' ? 'English' : 'ქართული'; // Example translation
  }

  switchCurrency(event: Event,currency: string) {
    event.preventDefault();
    this.selectedCurrency = currency;
  }
  getCurrency(): string {
    if (this.selectedLanguage === 'en') {
        return this.selectedCurrency === 'usd' ? 'USD' : 'GEL';
    } else {
        return this.selectedCurrency === 'usd' ? 'დოლარი' : 'ლარი';
    }
}



  


  // constructor(private translate: TranslateService) {
  //   translate.setDefaultLang('en');
  // }

  // switchLanguage(language: string) {
  //   this.translate.use(language);
  // }



  toggleMenu: boolean = false;

  toggle() {
    this.toggleMenu = !this.toggleMenu
    console.log(this.toggleMenu)
  }
  preventToggle(event: Event) {
    event.stopPropagation();
  }


  // რესპონსივში ენების/ვალუტის გამოატანა

  list: boolean = false;
  responsiveList() {
    this.list = !this.list
    console.log(this.list)
  }
  listCurrensy: boolean = false;
  responsiveListCurrency() {
    this.listCurrensy = !this.listCurrensy
  }

  // რეგისტრაციის ფორმის ჩართვა/გამორთვა
  isDisplay: boolean = false;

  signIn() {
    setTimeout(() => {
      this.isDisplay = !this.isDisplay;
    }, 100);
  }

  preventClose(event: Event) {
    event.stopPropagation();
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (this.isDisplay) {
      const clickedInside = (event.target as HTMLElement).closest('.sign-container');
      if (!clickedInside) {
        this.isDisplay = false;
        console.log('Clicked outside, isDisplay:', this.isDisplay);
      }
    }
  }



}


