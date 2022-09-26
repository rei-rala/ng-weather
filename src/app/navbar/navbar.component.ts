import { Component, Input } from '@angular/core';

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
  @Input() title: string = 'ERR';
  navList: NavbarItem[] = [
    { url: '/first-link', text: 'first' },
    { url: '/second-link', text: 'second' },
  ];
}
