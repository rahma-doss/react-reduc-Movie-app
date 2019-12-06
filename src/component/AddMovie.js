import React from 'react'
import {connect } from 'react-redux'
import {addMovie} from '../actions/actions'

class AddMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
      }
      add = () => {
        let name = prompt("Enter your name");
        let image = prompt("Enter your picture");
        let rating = prompt("Enter your rating");
        let year = prompt("Enter your year");
        let newMovie = {
            image:image,
            title: name,
            date: year,
            rating: rating,
        };
        this.props.addNewMovie(newMovie);
      };
    render(){
        return(<div className='addMovie'>
            <button onClick={this.add} >+</button>
            
        </div>

        )
    }
}

const mapDispatchToprops =(dispatch) =>{
    return {
        addNewMovie: Movie => dispatch(addMovie(Movie))
    }
}

export default connect(null,mapDispatchToprops) (AddMovie)