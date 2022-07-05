import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { SearchPageServiceService } from '../services/search-page-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  value = '';
  hidden = true;
  cartValue=0;

  @Output() searchData = new EventEmitter();

  constructor(private searchPageService:SearchPageServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  search(){
    this.searchPageService.search(this.value, 0)
    this.router.navigate(['/product'], {skipLocationChange: true})
  }

  closeIcon(event: any){
    this.hidden = !(event.length > 0)
  }

  clear(){
    this.value = ''
    this.hidden=true
  }

}
