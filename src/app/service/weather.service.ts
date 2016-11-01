import {Injectable, Inject} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class WeatherService {
  private apiKey = '90dbe9721a267188';
  conditionsUrl = 'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q';
  searchUrl = 'http://autocomplete.wunderground.com/aq?query=';

  constructor(private http: Http){

  }

  getWeather(zmw){
    return this.http.get(this.conditionsUrl + '/zmw:' + zmw + '.json')
      .map(response => response.json())
  }

  searchCitys(searchStr){
    return this.http.get(this.searchUrl + searchStr)
      .map(response => response.json())

  }


}
