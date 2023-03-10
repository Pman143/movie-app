import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-slider',
  templateUrl: './movie-slider.component.html',
  styleUrls: ['./movie-slider.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition('* => void', [
        style({ opacity: 1 }),
        animate('300ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class MovieSliderComponent implements OnInit {
  movies = MOVIES;
  currentMovie: number = 0;

  ngOnInit(): void {
    this.sliderTimer();
  }

  sliderTimer() {
    setInterval(() => {
      this.currentMovie = ++this.currentMovie % this.movies.length;
    }, 5000);
  }
}


const MOVIES = [
  {
    title: 'Knock at the Cabin',
    yearReleased: '1977',
    runtimeInMinutes: '121 min',
    plot: 'The Imperial Forces, under orders from cruel Darth Vader, hold Princess Leia hostage in their efforts to quell the rebellion against the Galactic Empire. Luke Skywalker and Han Solo, captain of the Millennium Falcon, work together with the companionable droid duo R2-D2 and C-3PO to rescue the beautiful princess, help the Rebel Alliance and restore freedom and justice to the Galaxy.',
    imbdRating: '8.6',
    language: 'English',
    moviePosterUrl: '22z44LPkMyf5nyyXvv8qQLsbom.jpg',
  },
  {
    title: 'Black Panther',
    yearReleased: '2018',
    runtimeInMinutes: '134 min',
    plot: "After the events of Captain America: Civil War, Prince T'Challa returns home to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new king. However, T'Challa soon finds that he is challenged for the throne from factions within his own country. When two foes conspire to destroy Wakanda, the hero known as Black Panther must team up with C.I.A. agent Everett K. Ross and members of the Dora Milaje, Wakandan special forces, to prevent Wakanda from being dragged into a world war.",
    imbdRating: '7.3',
    language: 'English, Swahili, Nama, Xhosa, Korean',
    moviePosterUrl: 'xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
  },
  {
    title: 'Creed',
    yearReleased: '2008',
    runtimeInMinutes: '60 min',
    plot: "Hip-Hop sensation and music mogul 50 Cent teams up with MTV to bring you the newest elimination reality show. The contestants, hand picked by 50 himself, have proven themselves to be savvy, street-smart and successful in their own right. But now it's time to prove themselves to 50 and see who has the power to earn the money, $100,000 of 50 Cent's own money. Each week, 50 Cent will share his own personal story on his success-- 50's \"Laws of Power.\" The candidates will take the knowledge and apply it in various street smart, hustler driven challenges that will test their entrepreneurial skills and thirst for power. This is a game based on street smarts and you must strive to gain the trust of 50 in order to make it to the top. The candidates will be pushed to their limits, and must remain strong and fearless. The search will be narrowed down each week by 50 and his crew, with the finalist winning $100,000 of 50's money",
    imbdRating: '4.5',
    language: 'English',
    moviePosterUrl: '5i6SjyDbDWqyun8klUuCxrlFbyw.jpg',
  }
];