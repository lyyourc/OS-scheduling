import React from 'react';

const Picker = ({currentAlgo, title, choices, onChange}) => {
  return (
    <div>
      <h4>{title}</h4>

      <ul>
      {choices.map(choice =>
        <li key={choice}>
          <input type="radio" name={title} id={choice}
            value={choice} checked={choice === currentAlgo}
            onChange={e => onChange(e.target.value)}
          />
          <label htmlFor={choice}>
            {choice}
          </label>
        </li>
      )}
      </ul>
    </div>
  );
};

export default Picker;
