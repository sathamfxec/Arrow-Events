import React from 'react';
import Config from './../config/Config';
import { useSelector, useDispatch } from 'react-redux';
import { setSource } from './../reducer/reducer';

const Arrow = (props) => {
  const source = useSelector((state) => state.getSource.value);
  const dispatch = useDispatch();
  /**
   * Method to update the source property
   */
  const updateSource = (event) => {
    let calc;
    switch (event) {
      case 'top':
        calc = source.row - 1;
        calc <= Config.row &&
          calc > 0 &&
          dispatch(setSource({ row: calc, column: source.column }));
        break;
      case 'left':
        calc = source.column - 1;
        calc <= Config.column &&
          calc > 0 &&
          dispatch(setSource({ row: source.row, column: calc }));
        break;
      case 'right':
        calc = source.column + 1;
        calc <= Config.column &&
          calc > 0 &&
          dispatch(setSource({ row: source.row, column: calc }));
        break;
      case 'bottom':
        calc = source.row + 1;
        calc <= Config.row &&
          calc > 0 &&
          dispatch(setSource({ row: calc, column: source.column }));
        break;
      default:
        break;
    }
  };
  return (
    <React.Fragment>
      <div
        className={`${props?.direction}Arrow`}
        onClick={() => updateSource(props?.direction)}
      >
        <img src="https://stackblitz.com/files/react-kwl3cn/github/sathamfxec/Arrow-Events/master/public/arrow-icon.png" />
      </div>
    </React.Fragment>
  );
};

export default Arrow;
