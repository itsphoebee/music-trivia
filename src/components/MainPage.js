import React from 'react';
import Question from './Question';

const MainPage = ({ songs, artist }) => {
  if (songs) {
    let answers = [];
    songs.map(song => answers.push({ id: song.result.id, title: song.result.title }))

    // shuffle the answer choices
    const shuffle = (a) => {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }

    // Capitalize artist name
    let artistTitleCase = artist.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');

    return (
      <div>
        <Question artist={artistTitleCase} answers={answers} shuffle={shuffle} />
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default MainPage;

