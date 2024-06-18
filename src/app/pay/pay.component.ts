import { Component, OnInit } from '@angular/core';
import { RouterModule, } from '@angular/router';

import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';




@Component({
  selector: 'app-pay',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './pay.component.html',
  styleUrl: './pay.component.css'
})
export class PayComponent  {
  ticketId: string | null=null;

  constructor() { }

onSubmit(){
  // this.ticketId = sessionStorage.getItem('ticketId') || null;
  //   alert('Successful registration, your ticket ID number is: '+ this.ticketId)
}
}
