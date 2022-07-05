import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ApiHandlerServiceService } from './api-handler-service.service';

describe('ApiHandlerServiceService', () => {
  let service: ApiHandlerServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [
      ],
    }).compileComponents();
    service = TestBed.inject(ApiHandlerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return observable', () => {
    service.get("../../assets/sample_response.json", {}).subscribe(
      (result:any) => {
        expect(result.data.products.length).toBe(24);
      }
    )
  })
});
