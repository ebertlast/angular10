import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  logo: string = "https://docs.angular.lat/assets/images/logos/angular/angular_whiteTransparent.png"

  constructor() { }

  ngOnInit(): void {
  }

}
