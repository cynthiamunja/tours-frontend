import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AsyncValidatorFn,ReactiveFormsModule,   FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})
export class HotelsComponent {
  currentHotels=[
    {
      hotelID:1,
      hotelName:"santorini",
      hotelLocation:"Greece",
      hotelImage:"https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=600",
      hotelDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      hotelPrice:20000
    },
    {
      hotelID:1,
      hotelName:"santorini",
      hotelLocation:"Greece",
      hotelImage:"https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=600",
      hotelDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      tourPrice:20000
    }
  ]
  addHotelForm! :FormGroup
  
  ngOnInit():void{
    this.addHotelForm=new FormGroup({
      addhotelsdiv: new FormGroup({

        hotelName: new FormControl(null, [Validators.required]),
        hotelImage: new FormControl(null, [Validators.required]),
        hotelLocation: new FormControl(null, Validators.required),
        hotelDescription: new FormControl(null, Validators.required)
      })
    })
  }

  onAddHotel(){
    if (this.addHotelForm.valid){
      console.log("form valid")
      this.addHotelForm.reset
    }
  }

}
