import { Injectable, OnInit } from '@angular/core';
import { hotel } from '../models/hotels';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HotelsService implements OnInit{

  constructor() { }


  private hotels: hotel[] = [
    {
      hotelId: 1,
      hotelName: "santorini",
      hotelLocation: "Greece",
      hotelImage: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=600",
      hotelDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      hotelPrice: 20000
    },
    {
      hotelId: 1,
      hotelName: "santorini",
      hotelLocation: "Greece",
      hotelImage: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=600",
      hotelDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      hotelPrice: 20000
    }
  ]

  addHotelForm!: FormGroup

  ngOnInit(): void {
    this.addHotelForm = new FormGroup({
      addhotelsdiv: new FormGroup({

        hotelName: new FormControl(null, [Validators.required]),
        hotelImage: new FormControl(null, [Validators.required]),
        hotelLocation: new FormControl(null, Validators.required),
        hotelDescription: new FormControl(null, Validators.required)
      })
    })
  }


  addhotel(newhotel: hotel) {
    this.hotels.push(newhotel)
  }

  gethotels() {
    return this.hotels
  }

  getOnehotel(hotelID: number) {
    return this.hotels.findIndex(x => x.hotelId === hotelID)
  }

  deletehotel(id: number) {
    let index = this.hotels.findIndex(x => x.hotelId === id)
    if (index >= 0) {
      this.hotels.splice(index, 1)
    }
  }

  updatehotels(id: number, updatedhotel: hotel) {
    let index = this.hotels.findIndex(x => x.hotelId === id)
    if (index >= 0) {
      this.hotels.splice(index, 1)
    }
  }

}
