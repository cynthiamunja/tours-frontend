import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { ToursComponent } from './tours/tours.component';
import { AsyncValidatorFn,ReactiveFormsModule } from '@angular/forms';

import { HotelsComponent } from './hotels/hotels.component';
import { RegisterUsersComponent } from './register-users/register-users.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToursComponent, HotelsComponent,ReactiveFormsModule,RegisterUsersComponent ,HomeComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tours_Frontend';

  id!:string
  tour!:any

  constructor(private route:ActivatedRoute){}

  ngOnInit():void{
    this.id=this.route.snapshot.params['id']
  }
}
