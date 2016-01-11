import React from 'react';

const converToTable = (arr = []) => {
  return arr.reduce((prev, current, index) => {
    const keys = Object.keys(current);

    if (index === 0) prev = [...prev, keys];

    const values = keys.map(key => current[key]);

    return [
      ...prev,
      values
    ];
  }, []);
};

const Table = ({data}) => {
  data = converToTable(data);
  const headings = data.slice(0, 1)[0] || [];
  const body = data.slice(1) || [];

  return (
    <table className="ui striped table">
      <thead>
        <tr>
          {headings.map(heading =>
            <th key={heading}> {heading} </th>
          )}
        </tr>
      </thead>

      <tbody>
        {body.map(row =>
          <tr key={row}>
            {row.map((cell, i) =>
              <td key={i}>{cell}</td>
            )}
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
