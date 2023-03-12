import { SkeletonModule } from 'src/app/components/shared/skeleton/skeleton.module';
import { SearchComponent } from './components/search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyAngularMaterialModule } from 'src/app/components/shared/skeleton/my-angular-material.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule,
    MyAngularMaterialModule,
    SkeletonModule,
  ],
})
export class SearchModule {}
