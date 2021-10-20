import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positiveInTotal }) {
  return (
    <ul className={s.list}>
      <li className={s.itemG}>
        Good: <span className={s.definition}>{good}</span>
      </li>
      <li className={s.itemN}>
        Neutral: <span className={s.definition}>{neutral}</span>
      </li>
      <li className={s.itemB}>
        Bad: <span className={s.definition}>{bad}</span>
      </li>
      <li className={s.itemT}>
        Total: <span className={s.definition}>{total}</span>
      </li>
      <li className={s.itemP}>
        Positive feedback:{' '}
        <span className={s.definition}>
          {isNaN(positiveInTotal) ? 0 : positiveInTotal}%
        </span>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveInTotal: PropTypes.number.isRequired,
};
export { Statistics };
