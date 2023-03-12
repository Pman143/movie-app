import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('should set responsiveOptions to have 3 items', () => {
      expect(component.responsiveOptions.length).toEqual(3);
    });

      it('should invoke getDummyMovies', () => {
        const spyOnDummyMovies = spyOn(component, 'getDummyMovies').and.callThrough();
        expect(spyOnDummyMovies).toHaveBeenCalled();
      });
});
