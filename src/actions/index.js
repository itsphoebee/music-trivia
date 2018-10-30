import axios from 'axios';
require('dotenv').config()

// Action creator - function that returns action object
export const setArtist = (artist) => {
  debugger
  return {
    type: 'GET_ARTIST',
    artist
  }
}

const loadArtist = (artist) => {
  return {
    type: 'LOAD_ARTIST',
    artist
  }
}

// Async action
export const getArtistInfo = (artistName) => {
  const token = process.env.CLIENT_ACCESS_TOKEN;
  const baseURL = 'https://api.genius.com/';
  const config = {
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
  return dispatch => {
    // makes a request for a user with the given id
    axios.get(`${baseURL}search?access_token=${token}&q=${artistName}&per_page=20`)
      .then(response => {
        // dispatch another action to parse through data
        let artist = response.data.response.hits
        console.log(artist)
        // fires action creator
        dispatch(loadArtist(artist))
      })
      .catch(error => {
        // throw error if any
        throw (error)
      })
  }
}
