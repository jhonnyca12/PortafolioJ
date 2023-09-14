import { Component } from '@angular/core';

@Component({
  selector: 'app-contactame',
  templateUrl: './contactame.component.html',
  styleUrls: ['./contactame.component.css']
})
export class ContactameComponent {
title = 'gmaps';

position = {
  lat: 10.233224837775227,
  lng: -67.97600289735674
}

label = {
  color: 'red',
  text: 'marcador'
}
}
