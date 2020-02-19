import { Component, OnInit } from '@angular/core';
import {DanhMucService} from '../danh-muc.service';

@Component({
  selector: 'app-danh-muc',
  templateUrl: './danh-muc.component.html',
  styleUrls: ['./danh-muc.component.scss']
})
export class DanhMucComponent implements OnInit {

  categories: any[];

  constructor(private categoryService: DanhMucService) { }

  ngOnInit() {
    // this.categories = this.categoryService.getCategories();

    this.categoryService.getCategories().subscribe( result => {
      this.categories = result;
    });
  }

}
