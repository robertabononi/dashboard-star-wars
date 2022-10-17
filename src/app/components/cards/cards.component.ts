import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  characters: any;
  planets: any;
  vehicles: any;

  constructor(
    private service: DashboardService
  ) { }

  ngOnInit(): void {
    this.getCharacters();
    this.getPlanets();
    this.getVehicles();
  }

  getCharacters() {
    this.service.getCharacters().subscribe(response => {
      this.characters = response;
    })
  }

  getPlanets() {
    this.service.getPlanets().subscribe(response => {
      this.planets = response;
    })
  }

  getVehicles() {
    this.service.getVehicles().subscribe(response => {
      this.vehicles = response;
    })
  }

}
