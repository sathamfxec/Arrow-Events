import React from 'react';
import './../style.scss';
import Arrow from './Arrow';
import Keyboard from './Keyboard';

const App = () => {
  return (
    <React.Fragment>
      <div className={`parentDiv`}>
        <div className={`directions`}>
          <div className="topBlock">
            <Arrow direction={`top`} />
          </div>

          <div className="centerBlock">
            <Arrow direction={`left`} />
            <Arrow direction={`right`} />
          </div>

          <div className="bottomBlock">
            <Arrow direction={`bottom`} />
          </div>
        </div>
        <Keyboard />
      </div>
    </React.Fragment>
  );
};

export default App;
