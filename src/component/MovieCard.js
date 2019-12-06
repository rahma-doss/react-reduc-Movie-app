import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import ModalComponent from './ModalComponent'
import './component.css'
import { connect } from 'react-redux';
import  { Link } from 'react-router-dom'
import {removeMovie} from '../actions/actions'

class MovieCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rating: 1,

        }
    }


    render() {
        const { movie } = this.props;
        const { rating } = this.state;
        return (
            <div className='MovieCard'>
                <img src={movie.image} />
                <h5>{movie.title}</h5>
                <h5> {movie.date} </h5>
                <StarRatingComponent name="rate1" starCount={5} value={movie.rating} />
                <Link to={`/description/${movie.id}`}><button>Movie Description</button></Link>
                <button onClick={()=> this.props.remove(movie.id)} >Remove</button>
                <ModalComponent infos={movie} editMode={true} /> 

            </div>
        )
    }
}


const mapDispatchToprops = (dispatch)=>{
    return {
        remove : y=> dispatch(removeMovie(y)),

    }
}

export default connect (null,mapDispatchToprops) (MovieCard)
