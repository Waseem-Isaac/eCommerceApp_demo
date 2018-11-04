import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class producFormComponent implements OnInit {
  @Input() product: any;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
