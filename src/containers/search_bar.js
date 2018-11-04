import React,{Component} from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
  }
onInputChange(event){
  this.setState({term: event.target.value});
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
          
        </span>
      </form>
    );
  }
}
