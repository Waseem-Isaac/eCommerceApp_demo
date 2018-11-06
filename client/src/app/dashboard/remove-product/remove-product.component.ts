import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DashboardService } from '@app/shared/services/dashboard.service';

@Component({
  selector: 'app-remove-product',
  templateUrl: './remove-product.component.html',
  styleUrls: ['./remove-product.component.scss']
})
export class RemoveProductComponent implements OnInit {

  @Input() product: any;

  constructor(public activeModal: NgbActiveModal,private dashboardService:DashboardService,
    private toastr: ToastrService) { }

  ngOnInit() {
  }


  remove(){
    this.dashboardService.removeProduct(this.product.objectId).subscribe((res: any) => {
      console.log(res);
      this.toastr.success('Product deleted succsssfully .');
      this.activeModal.close(this.product)
    }, err => {
      console.log(err)
    })
  }

}
