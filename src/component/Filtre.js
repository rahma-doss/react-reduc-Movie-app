import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import { connect } from 'react-redux'
import {searchMovie} from '../actions/actions'

class Filtre extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 1,
      text: ''
    };
  }

  onStarClick =(nextValue, prevValue, name)=> {
    this.setState({ rating: nextValue }, ()=>this.props.search({text:this.state.text, rating:this.state.rating}));

  }
  handleChange=(e)=>{
this.setState({ text :e.target.value},()=>this.props.search({text:this.state.text, rating:this.state.rating})
  )
  }

  render() {
    const { rating } = this.state;
    return (
      <div>
        <input placeholder='Search' onChange={this.handleChange}  value={this.state.text}/>

        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={this.state.rating}
          onStarClick={this.onStarClick }
        />
      </div>
    )
  }
}
 
const mapDispatchToprops =(dispatch) =>{
  return {
    search: x => dispatch(searchMovie(x))
  }
}



export default connect(null,mapDispatchToprops)(Filtre)