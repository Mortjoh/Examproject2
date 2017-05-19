import { NgIf } from '@angular/common/src/directives/ng_if';
import { packageChunkSort } from 'angular-cli/utilities/package-chunk-sort';
import { RADIO_VALUE_ACCESSOR } from '@angular/forms/src/directives/radio_control_value_accessor';
import { NgFor } from '@angular/common/src/directives/ng_for';
import { Component, OnInit } from '@angular/core';

import { TravelService } from './travel.service';

@Component({
  selector: 'app-travel',
  template: `
  <div>
    <button (click)="loadTravel()"> Load the thing </button>     
  </div>
  <div class="container">
<table class="table table-hover">
  <thead>
    <tr>
      <th> id </th>
      <th> arrival </th>
      <th> departure </th>
      <th> date </th>
    </tr>
  </thead>
  <tr *ngFor='let item of travel'>
    <th>{{item._id}}</th>
    <th>{{item.Departure}} </th>
    <th>{{item.Arrival}} </th>
    <th>{{item.Date}} </th>
  </tr>
  </table>
  </div>
  

    <!--table id="listTable" class="responsive-table">
        <thead>
            <tr>
                <th id="_id">_id</th>
                <th id="Departure">2nd position</th>
                <th id="Arrival">3rd position</th>
                <th id="Date">4th position</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <td data-1st="1st">hej</td>
                <td data-2nd="2nd">med</td>
                <td data-3rd="3rd">dig</td>
                <td data-4th="4th">!</td>
            </tr>
        </tfoot>
      </table!-->
  `,
  styleUrls: ['./travel.component.scss'],
  providers: [TravelService]
})
export class TravelComponent {

  constructor(private travelService: TravelService) { }
  public travel = [];

  loadTravel() {
    this.travelService.getTravel().subscribe((data) => {
      this.travel = data.filter((o) => {
        if (o.Departure) {
          return o;
        }
      });
    });
    console.log(this.travel);
  }

}
