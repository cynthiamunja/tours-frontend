import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable, Subscription, map } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnDestroy, OnInit{

  sub!:Subscription

  obs= new Observable<number>(observer=>{
   let count =0 
   setInterval(()=>{
      
      observer.next(count)
      if (count===5){
        observer.complete()
      }
      count++

    }, 1000)
  })


  constructor(private authservice:AuthService){}

  ngOnDestroy(): void {
      console.log("login component destroyed")
      this.sub.unsubscribe()
  }

  ngOnInit(): void {
      this.sub=this.obs.pipe(
        map(x=>x*10)
      ).subscribe({
        next:(val)=>console.log(val),
        error:err=>console.log(err),
        complete:()=> console.log("completed")
      })
  }
}
