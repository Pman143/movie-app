import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  exports: [MatToolbarModule, MatIconModule, MatProgressBarModule],
})
export class MyAngularMaterialModule {}
