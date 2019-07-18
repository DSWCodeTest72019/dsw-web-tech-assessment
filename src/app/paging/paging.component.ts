import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements OnInit {
  @Input() totalProducts : number;
  pages: number[];
  constructor() {   
    this.pages = Array(this.totalProducts).map((_item, index) => index)
  }

  ngOnInit() {
  }

}
