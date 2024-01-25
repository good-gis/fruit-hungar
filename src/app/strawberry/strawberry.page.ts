import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strawberry',
  templateUrl: './strawberry.page.html',
  styleUrls: ['./strawberry.page.scss'],
})
export class StrawberryPage implements OnInit {
  public progress = 0.6;
  public days = '4';

  constructor() { }

  ngOnInit() {
  }

}
