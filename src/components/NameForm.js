import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NameForm extends Component {
  state = {
    artist: ''
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  handleChange = (e) => {
    let value = e.target.value;
    this.setState({
      artist: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.artist)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="artist">Enter artist name:</label>
        <input
          type="text"
          placeholder="artist name"
          value={this.state.artist}
          onChange={this.handleChange}
        />
        <button
          type="submit"
          disabled={!this.state.artist}>
          Submit
        </button>
      </form>
    )
  }
}
