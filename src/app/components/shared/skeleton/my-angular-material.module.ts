import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator'

@NgModule({
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule,
    MatPaginatorModule,
  ],
})
export class MyAngularMaterialModule {}
