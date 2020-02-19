import { Component, OnInit } from '@angular/core';
import {DanhMucService} from '../danh-muc.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-them-danh-muc',
  templateUrl: './them-danh-muc.component.html',
  styleUrls: ['./them-danh-muc.component.scss']
})
export class ThemDanhMucComponent implements OnInit {
  formGroup = new FormGroup({
    categoryName: new FormControl()
  });

  constructor(private categoryService: DanhMucService) { }

  ngOnInit() {
  }

  save() {
    const name = this.formGroup.get('categoryName').value;
    this.categoryService.addCategory(name).subscribe( result => { // status: 200
      alert('Đã thêm thành công!');
    }, error => {
      alert('Không thêm được!');
    });
  }

}
