import {Component, OnInit} from '@angular/core';
import {GunService} from "../../services/gun.service";
import {NbMenuService, NbSidebarService, NbThemeService} from "@nebular/theme";
import {filter, map} from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username = '';

  userItems = [
    { title: 'Change Theme' },
    { title: 'Logout' }
  ]

  constructor(private gunService: GunService,
              private themeService: NbThemeService,
              private sidebarService: NbSidebarService,
              private menuService: NbMenuService) {
    // ☀️
    // 🌑

  }

  ngOnInit() {
    this.gunService.user.get('alias').on((alias: any) => {
      if (alias && typeof alias === "string") {
        this.username = alias.charAt(0).toUpperCase() + alias.slice(1);
      }
    });

    this.menuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'userMenu'),
        map(({ item: { title } }) => title.toLowerCase()),
      )
      .subscribe(title => {
        if (title == "logout") {
          this.logout();
        } else if (title.includes("change theme")) {
          this.toggleTheme();
        }
      });

    this.themeService.onThemeChange().subscribe((theme) => {
      this.userItems[0] = { title: (theme.name == "default" ? "☀️" : "🌑") + " Change Theme" };
    });

  }

  logout() {
    this.gunService.signOut();
  }

  toggleTheme() {
    this.themeService.changeTheme(this.themeService.currentTheme == "default" ? "dark" : "default")
  }

  toggleSidebar() {
    this.sidebarService.toggle(false, 'left');
  }
}
