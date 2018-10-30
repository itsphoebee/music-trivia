import React, { Component } from 'react';

class Choice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      result: null,
    }
  }

  onClick = () => {
    this.setState({
      clicked: true
    })

    if (this.props.id === 'wronganswer') {
      this.setState({
        result: 'Game Over!'
      })
    } else {
      this.setState({
        result: 'Correct!'
      })
    }
    // if state.result === 'Correct' then prompt 
    // a function that prompts the next question to load once a button has been clicked
    // nextQuestion()
  }

  render() {
    const { id, title } = this.props;

    return (
      <div>
        <div>
          <button className="choice" key={id} onClick={this.onClick}> {title} </button>
        </div>
        <div>
          {this.state.result}
        </div>
      </div>
    )
  }
}

export default Choice;