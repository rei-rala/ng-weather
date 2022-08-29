import { Component } from '@angular/core';

type NavbarItem = {
  url: string;
  text: string;
};

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class Navbar {
  customVar: string = 'ng-weather :)';
  navList: NavbarItem[] = [
    { url: '/first-link', text: 'first' },
    { url: '/second-link', text: 'second' },
  ];
}
