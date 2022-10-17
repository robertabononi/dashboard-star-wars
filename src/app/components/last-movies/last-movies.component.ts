import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-last-movies',
  templateUrl: './last-movies.component.html',
  styleUrls: ['./last-movies.component.scss']
})
export class LastMoviesComponent implements OnInit {
  movies!: Movie[];

  constructor(
    private service: DashboardService
  ) { }

  ngOnInit(): void {
    
    this.getMovies();
  }

  getMovies() {
    this.service.getMovies().subscribe((response: any) => {
      this.movies = response.results;
    });
  }
}
