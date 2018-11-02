import React from 'react';

const Choice = ({ id, title, onClick, answer }) => {
  return (
    <div>
      <button
        className="choice"
        value={title}
        data-answer={answer}
        key={id}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  )
}

export default Choice;