import { HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { ApiHandlerServiceService } from './api-handler-service.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchPageServiceService {
  
  ee: EventEmitter<any> = new EventEmitter<number>();
  apiUrl = environment.apiUrl;

  constructor(private apiHandler:ApiHandlerServiceService) { 
  }

  public fetchSearchResult(url:string, searchTerm:string, page:number, itemPerPage:number){
    const params = new HttpParams()
                      .set('searchTerm', searchTerm)
                      .set('start', page)
                      .set('itemPerPage', itemPerPage);
    this.apiHandler.get(url, {params: params}).subscribe(
      (result)=>{
        this.ee.emit(result);
      },
      (error) => {
        console.log(error);
        this.ee.emit(searchTerm);
      }
    )
  }

  public search(value: any, page: any){
    this.fetchSearchResult(this.apiUrl, value, page, 24);
  }
}
