import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';

import { NgForm } from '@angular/forms';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  categories: Category[];

  constructor(private categoryService: CategoryService) {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.listCategories();
  }

  listCategories() {

    this.categoryService.getCategories().subscribe(
      data => {
        // console.log('Categories=' + JSON.stringify(data));
        this.categories = data;
      }
    );
  }

  onFormSubmit(categoryForm: NgForm) {
    // console.log(categoryForm.value);
    // console.log('Name:' + categoryForm.controls.name.value);
    // console.log('Form Valid:' + categoryForm.valid);
    // console.log('Form Submitted:' + categoryForm.submitted);
    this.categoryService.create(categoryForm.value);
  }

}
