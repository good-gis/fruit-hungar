import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  @Input() isBackBtnAvailable?: boolean;

  constructor(public _location: Location, public router: Router) { }

  ngOnInit() {

  }

  goToBack() {
    this._location.back();
  }

  goToProfile() {
    this.router.navigate(['tabs/profile']);
  }
}
