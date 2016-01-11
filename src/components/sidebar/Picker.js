import React from 'react';

const Picker = ({currentAlgo, title, choices, onChange}) => {
  return (
    <div className="ui form sixteen wide column">
      <h4>{title}:</h4>

      <div className="grouped fields">
      {choices.map(choice =>
        <div className="field" key={choice}>
          <li className="ui radio checkbox">
            <input type="radio" name={title} id={choice}
              value={choice} checked={choice === currentAlgo}
              onChange={e => onChange(e.target.value)}
            />
            <label htmlFor={choice}>
              {choice}
            </label>
          </li>
        </div>
      )}
      </div>
    </div>
  );
};

export default Picker;
