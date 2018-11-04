import React, {Component} from 'react';

class WeatherList extends Component{
  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temparature</th>
            <th>Humidity</th>
            <th>Pressure</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    );
  }
}
