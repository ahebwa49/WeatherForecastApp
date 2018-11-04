import React,{Component} from 'react';
import {connect} from 'react-redux';


class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
onInputChange(event){
  this.setState({term: event.target.value});
}
onFormSubmit(event){
  event.preventDefault();
  this.props.fetchWeather(this.state.term);
}
  render(){
    return(
      <form className="input-group">
        <input
        className="form-control"
        placeholder="Enter your favorite city to get forecast for next five days"
        value={this.state.term}
        onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button onClick={this.onFormSubmit} onClickclassName="btn btn-secondary">Search</button>
        </span>
      </form>
    );
  }
}
