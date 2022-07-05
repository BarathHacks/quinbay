import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductPropertyClass } from '../model/product-property.model';
import { SearchPageServiceService } from '../services/search-page-service.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  products: [ProductPropertyClass];
  totalPages: any;
  currentPage = 0;
  searchTerm: any;
  hideAlert = true;
  constructor(private searchService: SearchPageServiceService, private router:Router) {
    this.products = [new ProductPropertyClass()]
  }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.searchService.ee.subscribe(
      response => {
        this.filterResponse(response)
      }
    );
  }

  filterResponse(response: { data: { products: any[] | undefined; paging: { total_page: any; page: any; }; searchTerm: any; }; }) {
    this.products = [new ProductPropertyClass()]
    if (response.data.products != undefined) {
      response.data.products.forEach(product => {
        const clean_product = {
          'name': product.name,
          'price': product.price.priceDisplay,
          'strikeThroughPrice': product.price.strikeThroughPriceDisplay,
          'discountPercent': product.price.discount,
          'images': product['images'],
          'review': product.review.absoluteRating,
          'location': product['location'],
          'numLocations': product['numLocations'],
          'reviewCount': product.review.count,
          'sold': product['soldRangeCount'] ? product['soldRangeCount']["en"] : 0,
        }
        this.products.push(clean_product)
      });
      this.totalPages = response.data.paging.total_page
      this.searchTerm = response.data.searchTerm
      this.products.shift()
      console.log(this.products)
    } else {
      console.log(response)
      this.router.navigate(['/notfound'], {queryParams: { product: response }, skipLocationChange: true})
    }
  }

  pageChange(page: any){
    console.log(page);
    this.currentPage=page
    this.searchService.search(this.searchTerm,page);
  }
}
