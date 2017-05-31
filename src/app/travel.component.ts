import { FormControlName } from '@angular/forms/src/directives';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common/src/directives/ng_if';
import { packageChunkSort } from 'angular-cli/utilities/package-chunk-sort';
import { RADIO_VALUE_ACCESSOR } from '@angular/forms/src/directives/radio_control_value_accessor';
import { NgFor } from '@angular/common/src/directives/ng_for';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { TravelService } from './travel.service';



@Component({
  selector: 'app-travel',
  templateUrl:'./travel.component.html',
  styleUrls: ['./travel.component.scss'],
  providers: [TravelService, FormsModule] 
})


export class TravelComponent {
  travel: FormGroup;
  constructor(fb: FormBuilder, private travelService: TravelService) {  
    this.travel = fb.group({
    'departure':'',
    'arrival':'' 
    })
  }
  public travels = [];

  loadTravel() {
    this.travelService.getTravel().subscribe((data) => {
      this.travels = data.filter((o) => {
        if (o.Departure) {
          return o;
        }
      });
    });
    console.log(this.travels);
  }
  submitTravel(travelInfo): void {
    let travel = {
    departure: travelInfo.value.departure,
    arrival: travelInfo.value.arrival
  };
        this.travelService.postTravel(travel).subscribe( data => {
        console.log("In submit!");
      });
  }
}
