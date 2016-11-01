import {Component, OnInit} from '@angular/core';

import { NavController } from 'ionic-angular';
import {WeatherService} from '../../app/service/weather.service'


@Component({
  selector: 'weather',
  templateUrl: 'weather.html'
})
export class WeatherPage{

  searchStr;
  weather;
  results;
  zmw;

  constructor(public navCtrl: NavController,
              private weatherService: WeatherService
  ){}



  ionViewWillEnter() { // this hook reloads the content everytime you navigate back to this tab

    this.getDefaultCity();
    this.weatherService.getWeather(this.zmw)
      .subscribe(response => this.weather= response.current_observation);
  }


  getQuery(){
    this.weatherService.searchCitys(this.searchStr)
      .subscribe(result => this.results = result.RESULTS)
  }

  chooseCity(city){
    this.results = [];
    this.weatherService.getWeather(city.zmw)
      .subscribe(response => this.weather= response.current_observation);

  }

  getDefaultCity(){
    if((<any>localStorage).city !== undefined){
      this.zmw = JSON.parse(localStorage['city'])['zmw']

    }else{
      this.zmw = '00000.1.15310';
    }

  }




}
