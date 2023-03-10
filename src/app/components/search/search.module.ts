import { SkeletonComponent } from './../../skeleton/skeleton.component';
import { SearchComponent } from './components/search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { FormsModule } from '@angular/forms';
import { SkeletonModule } from 'src/app/shared/skeleton/skeleton.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, SearchRoutingModule, FormsModule, SkeletonModule],
})
export class SearchModule {}
