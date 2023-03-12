import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component, Input } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatProgressBarModule],
      declarations: [AppComponent, HeaderComponentMock],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

@Component({
  selector: 'app-header',
  template: '',
})
export class HeaderComponentMock {
  @Input() showSearch: boolean;
}
