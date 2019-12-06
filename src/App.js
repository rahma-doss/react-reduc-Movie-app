import React from 'react';
// import Search from './component/Search'
import Filtre from './component/Filtre'
import MovieList from './component/MovieList'
// import AddMovie from './component/AddMovie'
import ModalComponent from './component/ModalComponent'
import './App.css';

class  App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {
    return (
      <div className="App">
        <Filtre/>
        <MovieList/>
        {/* <AddMovie /> */}
        <ModalComponent editMode={false} />
      </div>
    );
  }
  
}

export default App;
