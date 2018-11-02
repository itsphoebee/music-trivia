import React, { Component } from 'react';
import Choice from './Choice';
import PropTypes from 'prop-types';
import { updateScore } from '../actions/index';
import { connect } from 'react-redux';

class Question extends Component {
  static propTypes = {
    artist: PropTypes.string.isRequired,
    answers: PropTypes.array.isRequired,
    restart: PropTypes.func.isRequired
  }

  state = {
    id: 1,
    score: 0,
    gameOver: false,
    answered: false
  }

  nextQuestion = () => {
    if (this.state.id < 20) {
      this.setState({
        id: this.state.id + 1,
        answered: false
      })
    } else {
      this.setState({
        gameOver: true
      })
    }
  }

  gameOver = () => {
    this.setState({
      gameOver: true
    })
  }

  // once button choice is clicked, state should change to answered and answer choice should be checked if correct
  onClick = (e) => {
    this.setState({
      answered: true
    })
    // if the selected answer is correct, increase score and update to next Question
    if (e.target.getAttribute("data-answer") === "true") {
      this.nextQuestion();
      // also need to update score
      this.props.dispatch(updateScore(this.state.score))
    } else {
      this.gameOver()
    }
  }

  // Fisher–Yates shuffle algorithm
  shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // returns artist name in title case
  titleCase = (name) => {
    return name.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');
  }

  render() {
    const { artist, answers, restart } = this.props;
    let { id, gameOver, score } = this.state;
    let previousId = id - 1;
    let currentAnswer = answers.slice(previousId, id)
    currentAnswer[0].correct = true

    // hard code wrong answer choices
    let wrongAnswers = [{
      id: 'wronganswer1',
      title: 'this string',
      correct: false
    }, {
      id: 'wronganswer2',
      title: 'this string',
      correct: false
    }, {
      id: 'wronganswer3',
      title: 'this string',
      correct: false
    }]

    let choices = this.shuffle((currentAnswer).concat(wrongAnswers))
    return (
      <div>
        {!gameOver
          ? <div className="gameOn">
            <h3>Score: {score}</h3>
            <h2>Question {id}: Which of the following is a song by {this.titleCase(artist)}?</h2>
            <ul>
              {choices.map(choice => <Choice key={choice.id} id={choice.id} title={choice.title} onClick={this.onClick} answer={choice.correct} />)}
            </ul>
          </div>
          :
          <div className="gameOver">
            <h1>Game Over</h1>
            <p>You scored {score} points</p>
            <button
              onClick={restart}
            >
              Restart?
            </button>
          </div>
        }
      </div>
    )
  }
}

// connect redux state to react props
const mapStateToProps = state => {
  // returns prop of an array with 10 objects
  return {
    score: state.score
  }
}

export default connect(mapStateToProps)(Question)