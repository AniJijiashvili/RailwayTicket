import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Component, HostListener, } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgIf, NgClass,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  // ბურგერ მენიუს გამოატანა
toggleMenu:boolean = false;

toggle(){
  this.toggleMenu = !this.toggleMenu
  console.log(this.toggleMenu)
}
preventToggle(event: Event) {
  event.stopPropagation();
}




// რესპონსივში ენების/ვალუტის გამოატანა

list:boolean = false;
responsiveList(){
  this.list =!this.list
  console.log(this.list)
}
listCurrensy:boolean = false;
responsiveListCurrency(){
  this.listCurrensy =!this.listCurrensy
}

// რეგისტრაციის ფორმის ჩართვა/გამორთვა
isDisplay:boolean = false;

signIn(){
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


