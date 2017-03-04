import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  service: number = 1;
  id: number;
  sub: any;

  constructor(
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log('init');
    this.sub = this.route.params.subscribe(params => {
      this.service = params['id'];
    });
  }

}
