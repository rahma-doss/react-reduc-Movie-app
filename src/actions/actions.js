import {ADD_MOVIE} from './types'
import {Search_Movie,remove_Movie, EDIT_MOVIE} from './types'

export const addMovie = newMovie => {
    return {
      type: ADD_MOVIE,
      payload : newMovie
    };
  };

  export const searchMovie= x =>{
  return {
    type: Search_Movie,
    payload: x
  }}

  export const removeMovie= id =>{
    return {
      type: remove_Movie,
      payload: id
    }}

    export const editMovie=(movie)=>{
      return{
        type:EDIT_MOVIE,
        payload : movie
      }
    }