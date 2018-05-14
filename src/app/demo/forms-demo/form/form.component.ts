import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ExampleDef } from '../example.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  constructor(
    private router: Router,
    @Inject('ExampleDefs') public examples: ExampleDef[]) {
  }
  ngOnInit() {
  }

}
