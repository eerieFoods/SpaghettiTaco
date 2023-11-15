import { Component } from '@angular/core';
import {GunService} from "../../services/gun.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private gunService: GunService) {
  }

  logout() {
    this.gunService.signOut();
  }

}
