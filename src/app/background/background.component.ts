import { Component } from '@angular/core';
import { TextboxComponent } from '../textbox/textbox.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [TextboxComponent, HeaderComponent],
  templateUrl: './background.component.html',
  styleUrl: './background.component.css'
})
export class BackgroundComponent {

}
