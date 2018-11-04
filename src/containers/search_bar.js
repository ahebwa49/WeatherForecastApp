import React,{Component} from 'react';

class SearchBar extends Component{
  render(){
    return(
      <form className="input-group">
        <input
        className="form-control"
        placeholder="Enter yout favorite city to get forecast for next five days"
        />
      </form>
    );
  }
}
