import {Component, OnInit} from '@angular/core';

import { NavController } from 'ionic-angular';
import {WeatherService} from "../../app/service/weather.service";
import {WeatherPage} from "../weather/weather";

@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsPage implements OnInit{

  searchStr;
  defaultCity;
  results = [];


  constructor(public navCtrl: NavController,
              private weatherService: WeatherService

  ) {}

  ngOnInit(){
    this.getDefaultCity()

  }

  getQuery(){
    this.weatherService.searchCitys(this.searchStr)
      .subscribe(result => this.results = result.RESULTS)
  }

  chooseDefaultCity(city){
    this.results =[];
    if(typeof (Storage) !== "undefined"){
      localStorage['city'] = JSON.stringify(city)
      this.searchStr = city['name']
      this.getDefaultCity();

    }else{
      console.log('Local Storage Not Supported')
    }

  }



  getDefaultCity(){

    if( localStorage['city'] !== undefined){
      this.defaultCity = JSON.parse(localStorage['city'])['name']
    } else {
      this.defaultCity = ''
    }

  }

}
