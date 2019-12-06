import React from 'react'
import MovieCard from './MovieCard'
import { connect } from 'react-redux';
import './component.css'

class MovieList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        const {films} = this.props;
        return (
            <div className='Movielist'> 
               {films.map(el => <MovieCard  movie={el} />)}
            </div>
        )
    }
}
 
const mapStateToprops=(state)=>{
    return  {
        //films=>...
 films : state.MovieReducer
    }
}



export default connect(mapStateToprops)  (MovieList)