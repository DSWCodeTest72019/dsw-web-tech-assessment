import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../types/product';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  @Input() product : Product;
  constructor() { }

  ngOnInit() {
  }
  getStarClass(index: number) : string {
    if(!this.product.rating){
      return "";
    }

    if(index >= this.product.rating){
      return "";
    } else if (index < this.product.rating) {
      return "rating__star--full"
    }else {
      return "rating__star--half"
    }
  }
  randomNumber() {
    return Math.floor(Math.random() * 50) + 1;
  }
}
