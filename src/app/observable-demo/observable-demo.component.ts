import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debug } from 'util';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {

  // This function runs when subscribe() is called
    sequenceSubscriber(observer) {
      debugger
        // synchronously deliver 1, 2, and 3, then complete
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.complete();
       
        // unsubscribe function doesn't need to do anything in this
        // because values are delivered synchronously
        return {unsubscribe() {}};
      }
       
      onclick(){
      // Create a new Observable that will deliver the above sequence
      let sequence = new Observable(this.sequenceSubscriber);
            
      // execute the Observable and print the result of each notification
      sequence.subscribe({
        next(num) {debugger; console.log(num); },
        complete() { console.log('Finished sequence'); }
      });
      }
  constructor() { }

  ngOnInit() {
  }

}
