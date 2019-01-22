import { Component, OnInit } from '@angular/core';
import {Hero} from '../../hero'
import { HeroServiceService } from '../../hero-service.service';
import { HttpServiceService } from '../../services/http-service.service';
import {HttpResponseSample} from '../../models/http-response-sample';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  httpresp : HttpResponseSample;
  //powers = ['Really Smart', 'Super Flexible',
    //        'Super Hot', 'Weather Changer'];

 
  constructor( private sampleHttpHandler:HttpServiceService,private sampleHero:HeroServiceService ) { }
  model:Hero;
  ngOnInit() {

    let states:any;

   

    this.model = new Hero(18, 'Dr IQ', this.sampleHero.getPowers(), 'Chuck Overstreet');
    this.sampleHttpHandler.getStates().subscribe((data) => { this.httpresp = {...data } ;console.log(this.httpresp.data.pendingOrdersCount); console.log(JSON.stringify(data)); console.log(this.httpresp.isValid) 
    }
    ,error => {console.log(error);}
      );
  }

  //get diagnostic() { return JSON.stringify(this.model); }
}
