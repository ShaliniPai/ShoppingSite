import { Component, OnInit, ViewChild, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { IFFurnitureData } from '../Core/Interface/furnitureData.interface';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FurnitureEntityService } from '../Core/Services/furniture-entity.service';
import { RbSpinnerService } from '../Core/Services/rb-spinner.service';
import { Subscription } from 'rxjs';
import { MessageService } from '../Core/Services/index';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router, private http: HttpClient, private spinner: RbSpinnerService,
    private FurnitureService: FurnitureEntityService, private messageService: MessageService) { }
  result;
  fullResult = [];
  filteredResult = [];
  id;
  pageSize = 6;
  message$: any;
  subscription: Subscription;

  ngOnInit() {
    this.onSpinner(true);
    // Function to populate filtered results for pagination
    this.FurnitureService.getFurnitureDetails().subscribe((res: any) => {
      this.fullResult = res;
      this.filteredResult = res;
      this.result = this.fullResult.slice(0 * this.pageSize, (1) * this.pageSize);
      this.onSpinner(false);
    }, err => {
      this.onSpinner(false);
      console.log(err);
    });
    // when you select any collection this subscription gets notified
    this.messageService.collection.subscribe(subject => {
      this.filteredResult = this.fullResult.filter(res => {
        return res.collection === subject;
      });
      this.result = this.filteredResult.slice(0 * this.pageSize, (1) * this.pageSize);
    });

     // when you select any color this subscription gets notified
     this.messageService.color.subscribe(subject => {
      this.filteredResult = this.fullResult.filter(res => {
        return res.color === subject;
      });
      this.result = this.filteredResult.slice(0 * this.pageSize, (1) * this.pageSize);
    });

      // when you select any color this subscription gets notified
      this.messageService.category.subscribe(subject => {
        this.filteredResult = this.fullResult.filter(res => {
          return res.category === subject;
        });
        this.result = this.filteredResult.slice(0 * this.pageSize, (1) * this.pageSize);
      });

    // when you enter a search key this subscription gets notified
    this.messageService.searchTerm.subscribe(term => {
      this.filteredResult = term.length > 0 ?
        this.fullResult.filter((res: any) => {
          return res.name.toLocaleLowerCase().indexOf(term) !== -1 ||
            res.collection.toLocaleLowerCase().indexOf(term) !== -1 ||
            res.category.toLocaleLowerCase().indexOf(term) !== -1 ||
            res.description.toLocaleLowerCase().indexOf(term) !== -1;
        }) : this.fullResult;
      this.result = this.filteredResult.slice(0 * this.pageSize, (1) * this.pageSize);
    });
  }

  // Function to drill down and show furniture details on click of the tile
  showDetails(id) {
    console.log(id);
    this.router.navigate(['/details', id]);
  }

  // Progress Spinner function
  onSpinner(status: boolean) {
    setTimeout(() => {
      this.spinner.onRBSpinner$(status);
    });
  }

  // Pagination event
  pageChange(event) {
    // console.log(event);
    // console.log(this.fullResult.slice(event.pageIndex * event.pageSize, (event.pageIndex + 1) * event.pageSize));
    this.result = this.filteredResult.slice(event.pageIndex * event.pageSize, (event.pageIndex + 1) * event.pageSize);
  }
}

