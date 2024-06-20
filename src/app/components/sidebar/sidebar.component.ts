import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgForOf} from "@angular/common";
import {SidebarLinksInterface} from "../../interfaces/sidebar-links.interface";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    RouterLinkActive
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  links: SidebarLinksInterface[] = [
    {
      label: 'By Region',
      url: 'byRegion'
    },
    {
      label: 'By Country',
      url: 'byCountry'
    },
    {
      label: 'By Capital',
      url: 'byCapital'
    },
  ];
}
