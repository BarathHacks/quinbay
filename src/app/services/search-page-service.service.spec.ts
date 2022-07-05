import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { SearchPageServiceService } from './search-page-service.service';

describe('SearchPageServiceService', () => {
  let service: SearchPageServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [
      ],
    }).compileComponents();
    service = TestBed.inject(SearchPageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should receive sample response', () => {
    service.apiUrl = "../../assets/sample_response.json"
    service.search("iphone", 0);
    service.ee.subscribe(
      (result:any) => {
        expect(result.code).toBe(200);
        expect(result.data.searchTerm).toBe("iphone")
      },
      (error)=>{
        console.log(error)      }
    )
  });
});
