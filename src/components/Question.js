import React from 'react';
import Choice from './Choice';

const Question = ({ artist, answers }) => {
  // randomsong should be a song pulled randomly from genius api - just dont know how to do that yet
  // generate random number and then query for it /songs/randomnumber but idk doesnt work, get status 400 errors
  let randomSong = { id: 'wronganswer', title: 'This hardcoded string' }
  let choices = answers.slice(0, 3).concat(randomSong);
  return (
    <div>
      <h1>Which of the following is a song by {artist}?</h1>
      <ul>
        {choices.map(choice => <Choice key={choice.id} id={choice.id} title={choice.title} />)}
      </ul>
    </div>
  )
}

export default Question;