import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.scss']
})
export class ShowProductComponent implements OnInit {
  @Input() product: any;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
