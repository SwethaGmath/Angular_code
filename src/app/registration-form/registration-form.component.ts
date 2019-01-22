import { Component, OnInit } from '@angular/core';
//import {FormGroup, FormControl } from '@angular/forms';
//import { ManufactureRegistrationForm } from '../../manufacture-registration-form'
import { ManuRegForm } from '../../manu-reg-form'
import {HttpServiceService} from '../../services/http-service.service'

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  
   
  constructor(private httpHandler:HttpServiceService) { }
  
  model:ManuRegForm;

  ngOnInit() {
    this.model = new ManuRegForm('Esha');
    this.model.accType = ['Savings', 'Current'];
    this.model.states = ['Karnataka', 'Andra','Kerala','Tamilnadu']
    this.model.invoiceSate = ['Karnataka', 'Andra','Kerala','Tamilnadu']
  }
  onSubmit() {
    debugger
    alert("next pressed");
    alert('SUCCESS!! \n\n' + JSON.stringify(this.model));
    console.log(JSON.stringify(this.model));
    this.httpHandler.postDetails(this.model).subscribe(data => console.log(data));
    
  }

}
