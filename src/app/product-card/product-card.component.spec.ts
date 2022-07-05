import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchPageServiceService } from '../services/search-page-service.service';

import { ProductCardComponent } from './product-card.component';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;
  let searchService: SearchPageServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [ ProductCardComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    searchService = TestBed.inject(SearchPageServiceService);
    searchService.apiUrl = "../../assets/sample_response.json"
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search next page', async () => {
    component.pageChange(1);
    expect(component.currentPage).toBe(1);
  })
});
