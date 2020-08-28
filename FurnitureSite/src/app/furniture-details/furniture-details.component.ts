import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FurnitureEntityService } from '../Core/Services/furniture-entity.service';
import { RbSpinnerService } from '../Core/Services/rb-spinner.service';

@Component({
  selector: 'app-furniture-details',
  templateUrl: './furniture-details.component.html',
  styleUrls: ['./furniture-details.component.scss']
})
export class FurnitureDetailsComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private spinner: RbSpinnerService,
    private FurnitureService: FurnitureEntityService, private route: ActivatedRoute) { }
  id;
  result;

  ngOnInit() {
    this.route.params.subscribe(params => {
      // console.log(JSON.stringify(params));
      this.id = params.id;
      this.onSpinner(true);
      this.FurnitureService.getFurnitureDetailsID(this.id).subscribe((res: any) => {
        this.result = res;
        this.onSpinner(false);
      }, err => {
        this.onSpinner(false);
        console.log(err);
      });
    });
  }

  onSpinner(status: boolean) {
    setTimeout(() => {
      this.spinner.onRBSpinner$(status);
    });
  }
}
