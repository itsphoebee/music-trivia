import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getArtistInfo } from '../actions/index';
import MainPage from './MainPage';

class NameForm extends Component {
  constructor() {
    super();

    this.state = {
      artist: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      artist: e.target.value
    })
  }

  // on submit it should load all songs from artist 
  handleSubmit = (e) => {
    e.preventDefault();

    // disable form once game starts
    const { artist } = this.state;
    let modifiedSearch;

    // encode space as %20
    if (artist.indexOf(' ') >= 0) {
      modifiedSearch = encodeURIComponent(artist.trim())
    } else {
      modifiedSearch = artist
    }

    // take the target value and search Genius API for artist and load artist info
    this.props.getArtistInfo(modifiedSearch)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name an artist:
          </label>
          <input
            type="text"
            name="artist"
            value={this.state.artist}
            onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
        <MainPage songs={this.props.artist} artist={this.state.artist} />
      </div>
    );
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
    artist: state.artistReducer.artist
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NameForm);