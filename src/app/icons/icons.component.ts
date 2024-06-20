import { Component } from '@angular/core';

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.css',
})
export class IconsComponent {
  handleIconClick(iconName: string): void {
    console.log(`${iconName} icon clicked`);}
}
