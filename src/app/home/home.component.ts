import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Observable } from 'rxjs-compat';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dest = inject(DestroyRef)
  constructor() { }

  ngOnInit() {
    // const subscr = interval(1000).subscribe(count=>{
    //  console.log(count)
    // })

    //custom observable
    const customObservable = Observable.create((observer)=>{
      let count = 0;
      setInterval(()=>{
        observer.next(count);
        count++;
      }, 1000)
    })
    const subscr = customObservable.subscribe(data=>{
      console.log(data);
      
    })

    this.dest.onDestroy(()=>subscr.unsubscribe())
  }
}
