import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn,ReactiveFormsModule,   FormControl, FormGroup, Validators } from '@angular/forms';
import { ToursService } from '../services/tours.service';
import { tour } from '../models/tours';
import { HotelsService } from '../services/hotels.service';
import { hotel } from '../models/hotels';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit {
  tours!:tour[]
  hotels!:hotel[]

  constructor( private ps1:ToursService, private ps2: HotelsService){ }

  addHotelForm!: FormGroup
  addTourForm! :FormGroup

  ngOnInit():void{

  
    this.addHotelForm = new FormGroup({
      addhotelsdiv: new FormGroup({

        hotelName: new FormControl(null, [Validators.required]),
        hotelImage: new FormControl(null, [Validators.required]),
        hotelLocation: new FormControl(null, Validators.required),
        hotelDescription: new FormControl(null, Validators.required),
        hotelPrice: new FormControl(null, Validators.required)
      })
    })
    this.addTourForm=new FormGroup({
           addToursdiv: new FormGroup({
      
             tourName: new FormControl(null, [Validators.required]),
             tourImage: new FormControl(null, [Validators.required]),
             tourLocation: new FormControl(null, Validators.required),
             tourDescription: new FormControl(null, Validators.required),
             tourPrice: new FormControl(null, Validators.required)
           })
         })

        // this.tours=this.ps1.getTours()
         this.hotels=this.ps2.gethotels()
  }
  

addTour(){
  if (this.addTourForm.valid){
        console.log("form valid")
       //this.ps1.addTour
      }
      else{
        this.addTourForm.markAllAsTouched(); 
      }

 //console.log("form invalid")
}

addHotel(){
  if (this.addHotelForm.valid){
    console.log("form valid")
   this.ps2.addhotel
  }
  else{
    this.addHotelForm.markAllAsTouched(); 
  }
}



}









 // currentHotels=[
  //   {
  //     hotelID:1,
  //     hotelName:"santorini",
  //     hotelLocation:"Greece",
  //     hotelImage:"https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     hotelDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //     hotelPrice:20000
  //   },
  //   {
  //     hotelID:1,
  //     hotelName:"santorini",
  //     hotelLocation:"Greece",
  //     hotelImage:"https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     hotelDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //     tourPrice:20000
  //   }
  // ]
  // addHotelForm! :FormGroup
  
  // // ngOnInit():void{
  // //   this.addHotelForm=new FormGroup({
  // //     addhotelsdiv: new FormGroup({

  // //       hotelName: new FormControl(null, [Validators.required]),
  // //       hotelImage: new FormControl(null, [Validators.required]),
  // //       hotelLocation: new FormControl(null, Validators.required),
  // //       hotelDescription: new FormControl(null, Validators.required)
  // //     })
  // //   })
  // // }

  // onAddHotel(){
  //   if (this.addHotelForm.valid){
  //     console.log("form valid")
  //     this.addHotelForm.reset
  //   }
  // }
  // currentTours=[
  //   {
  //     tourID:1,
  //     tourName:"santorini",
  //     tourLocation:"Greece",
  //     tourImage:"https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     tourDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //     tourPrice:20000
  //   },
  //   {
  //     tourID:1,
  //     tourName:"santorini",
  //     tourLocation:"Greece",
  //     tourImage:"https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     tourDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //     tourPrice:20000
  //   }
  // ]
  
  // addTourForm! :FormGroup
    
  // ngOnInit():void{
  //   this.addTourForm=new FormGroup({
  //     addToursdiv: new FormGroup({
  
  //       tourName: new FormControl(null, [Validators.required]),
  //       tourImage: new FormControl(null, [Validators.required]),
  //       tourLocation: new FormControl(null, Validators.required),
  //       tourDescription: new FormControl(null, Validators.required)
  //     })
  //   }),
  //   this.addHotelForm=new FormGroup({
  //     addhotelsdiv: new FormGroup({

  //       hotelName: new FormControl(null, [Validators.required]),
  //       hotelImage: new FormControl(null, [Validators.required]),
  //       hotelLocation: new FormControl(null, Validators.required),
  //       hotelDescription: new FormControl(null, Validators.required)
  //     })
  //   })
  // }
  
  // onAddTour(){
  //   if (this.addTourForm.valid){
  //     console.log("form valid")
  //     this.addTourForm.reset
  //   }
  // }