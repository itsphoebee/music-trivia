import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Question from './Question';
import NameForm from './NameForm';
import { getArtistInfo } from '../actions/index';

class MainPage extends Component {
  state = {
    artistName: '',
    songs: null,
    score: 0
  };

  handleSubmit = (artist) => {
    this.setState({
      artistName: artist
    });
    let modifiedSearch;
    // encode space as %20
    if (artist.indexOf(' ') >= 0) {
      modifiedSearch = encodeURIComponent(artist)
    } else {
      modifiedSearch = artist
    }
    this.props.getArtistInfo(modifiedSearch)
  }

  restartGame = (e) => {
    debugger
    this.setState({
      artistName: '',
      songs: null,
      score: 0
    })
  }

  render() {
    let songsLoaded = this.props.songs;

    if (!songsLoaded) {
      return <NameForm onSubmit={this.handleSubmit} />
    } else {
      let answers = [];
      songsLoaded.map(song => answers.push({ id: song.result.id, title: song.result.title }))
      return <Question artist={this.state.artistName} answers={answers} restart={this.restartGame} />
    }
  }
}

// connect redux actions to react props
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getArtistInfo
  }, dispatch)
}

// connect redux state to react props
const mapStateToProps = state => {
  // returns prop of an array with 10 objects
  return {
    songs: state.artist.songs,
    score: state.score
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)