import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  service: number = 1;

  constructor(
    public route: ActivatedRoute
  ) {
    console.log('construct');
    console.log(this.route.params['_value']['id']);
  }

  ngOnInit() {
    this.service = this.route.params['_value']['id'];
    console.log('init');
    console.log(this.route.params);
  }

}
