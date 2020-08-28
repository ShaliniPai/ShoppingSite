import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material';
import { MessageService } from './Core/Services/index';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private messageService: MessageService) { }
  title = 'Furniture Site';

  isMenuOpen = true;
  contentMargin = 240;

  collections: string[] = [
    'Chairs', 'Table and Chairs', 'Shelves', 'Armchair'
  ];

  colours: string[] = [
    'Brown', 'White'
  ];

  categories: string[] = [
    'Living Room', 'Bed Room'
  ];

  links = ['HOME', 'SHOP', 'MAGAZINE'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'K$';
    }

    return value;
  }

  onToolbarMenuToggle() {
    console.log('On toolbar toggled', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;

    if (!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }

  filterCollection(collection): void {
    // send message to subscribers via observable subject for Collection
    this.messageService.setCollection(collection);
  }

  filterColor(color): void {
    // send message to subscribers via observable subject for Color
    this.messageService.setColor(color);
  }

  filterCategory(category): void {
    // send message to subscribers via observable subject for Category
    this.messageService.setCategory(category);
  }

  onSearchChange(event) {
    this.messageService.setSearchTerm(event.target.value);
  }
}
