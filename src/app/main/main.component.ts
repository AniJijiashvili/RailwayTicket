import { CommonModule, DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, AfterViewInit, NgModule, ElementRef, OnInit, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router, RouterModule } from '@angular/router';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSliderModule} from '@angular/material/slider';
import { DateAdapter } from '@angular/material/core';





interface Source {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-main',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatSliderModule,MatFormFieldModule,MatSelectModule, MatInputModule, FormsModule,NgClass, NgFor, NgIf, FormsModule,CommonModule,RouterModule, FormsModule,MatFormFieldModule, MatInputModule, MatDatepickerModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})


export class MainComponent implements OnInit{


  //ინფორმაცია სორსების ასარჩევად
  formatLabel(value: number): string {
    return `${value}`;
  }


  //ინფორმაცია სორსების ასარჩევად
  sources: Source[] = [
    {value: 'თბილისი', viewValue: 'თბილისი'},
    {value: 'ბათუმი', viewValue: 'ბათუმი'},
    {value: 'ფოთი', viewValue: 'ფოთი'},
  ];



  
  source: string = '';
  destination: string = '';
  date: string = '';
  travelers: number = 1;
  filteredDestinations: Source[] = [];

  constructor(private router: Router, private dateAdapter: DateAdapter<Date>) {
    // Setting the locale to be used by date adapter
    this.dateAdapter.setLocale('en-GB'); // Set your desired locale
  }

  ngOnInit() {
    this.filteredDestinations = [...this.sources];
  }


  // Function to filter out dates before today
  dateFilter = (d: Date | null): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set time to midnight to compare only dates
    return (d || new Date()) >= today; // Allow only today or future dates
  };

  filterDestinationOptions() {
    this.filteredDestinations = this.sources.filter(option => option.value !== this.source);
  }

  onSubmit() {
    this.router.navigate(['/train-list'], {
      queryParams: {
        source: this.source,
        destination: this.destination,
        date: this.date,
        travelers: this.travelers,
      },
    });
  }



  // რეგისტრაცია
  isDisplay: boolean = false;

  check() {
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
      const clickedInside = (event.target as HTMLElement).closest('.popup');
      if (!clickedInside) {
        this.isDisplay = false;
        console.log('Clicked outside, isDisplay:', this.isDisplay);
      }
    }
  }





  adults: number = 1;
  children: number = 0;
  showPopup: boolean = false;
  increaseAdults() {
    this.adults++;
  }

  decreaseAdults() {
    if (this.adults > 1) {
      this.adults--;
    }
  }

  increaseChildren() {
    this.children++;
  }

  decreaseChildren() {
    if (this.children > 0) {
      this.children--;
    }
  }



 
}


