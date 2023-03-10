import { MyAngularMaterialModule } from './utils/my-angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchModule } from './components/search/search.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MovieSliderComponent } from './components/movie-slider/movie-slider.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { CarouselModule } from 'primeng/carousel';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MovieSliderComponent,
    SkeletonComponent,
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    BrowserAnimationsModule,
    AppRoutingModule,
    SearchModule,
    MyAngularMaterialModule,
    CarouselModule,
    NgxSkeletonLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [HomeComponent, MovieSliderComponent, SkeletonComponent],
})
export class AppModule {}
