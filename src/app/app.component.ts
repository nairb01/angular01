import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackgroundComponent } from './background/background.component';
import { CampusComponent } from './campus/campus.component';
import { CoursesComponent } from './courses/courses.component';
import { Background1Component } from './background1/background1.component';
import { IconsComponent } from './icons/icons.component';
import { FacilitiesComponent } from './facilities/facilities.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BackgroundComponent,CampusComponent,CoursesComponent,Background1Component,IconsComponent,FacilitiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-design';
}
