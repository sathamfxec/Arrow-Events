import React from 'react';
import Config from './../config/Config';
import { useSelector } from 'react-redux';

const App = () => {
  const row = new Array(Config?.row).fill().map((value, index) => index + 1);
  const column = new Array(Config?.column)
    .fill()
    .map((value, index) => index + 1);
  const source = useSelector((state) => state.getSource.value);
  return (
    <React.Fragment>
      <div className="squareBlocks">
        {row.map((rowVal) => {
          return (
            <div className={`row`} key={Math.random()}>
              {column.map((colVal) => {
                return (
                  <div
                    className={
                      rowVal === source?.row && colVal === source?.column
                        ? 'selected column'
                        : 'column'
                    }
                    key={Math.random()}
                  ></div>
                );
              })}
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default App;
