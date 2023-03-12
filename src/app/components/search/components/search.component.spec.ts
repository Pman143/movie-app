import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageEvent } from '@angular/material/paginator';
import { By } from '@angular/platform-browser';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invoke onSearchMovie on ngAfterViewInit', () => {
    const spy = spyOn(component, 'onSearchMovie').and.callThrough();
    component.ngAfterViewInit();
    expect(spy).toHaveBeenCalledTimes(1);
  });

    it('should allow page change when changePage is invoked', () => {
      const event: PageEvent = {
        length: 2,
        pageIndex: 0,
        pageSize: 4
      };
      const spy = spyOn(component, 'changePage').and.callThrough();
      component.changePage(event);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(component.length).toEqual(2);
      expect(component.pageSize).toEqual(4);
      expect(component.pageIndex).toEqual(0);
    });
});
