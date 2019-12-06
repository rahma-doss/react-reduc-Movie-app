import React from 'react'
import { connect } from 'react-redux'
class Description extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           
        }
    }
    componentDidMount(){
        this.setState(
            this.props.films.filter(el => el.id === this.props.match.params.id)[0]
        )
    }
    render() {
        return (
            <div>
                <img src={this.state.image} />
                <h5>{this.state.title}</h5>
                <h5> {this.state.date} </h5>
                <h5>{this.state.description}</h5>
                <h1>{this.state.title}</h1>
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

export default connect(mapStateToprops,null)(Description)