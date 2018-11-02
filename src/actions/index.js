import axios from 'axios';
require('dotenv').config()

// load artist songs
const loadArtistSongs = (artist) => {
  return {
    type: 'LOAD_ARTIST_SONGS',
    songs: artist.hits
  }
}

export const updateScore = (score) => {
  return {
    type: 'INCREASE_SCORE',
    score
  }
}

// Async action
export const getArtistInfo = (artistName) => {
  const token = process.env.CLIENT_ACCESS_TOKEN;
  const config = {
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }

  const baseURL = 'https://api.genius.com/';

  return dispatch => {
    // makes a request for a user with the given id
    axios.get(`${baseURL}search?access_token=${token2}&q=${artistName}&per_page=20`)
      .then(response => {
        // dispatch another action to parse through data
        let artist = response.data.response
        console.log(artist)
        // fires action creator
        dispatch(loadArtistSongs(artist))
      })
      .catch(error => {
        // throw error if any
        throw (error)
      })
  }
}
