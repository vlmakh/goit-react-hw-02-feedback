import PropTypes from 'prop-types';
import { StatList, Name, State } from './Statistics.styled';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <StatList>
      <li>
        <Name>Good:</Name>
        <State>{good}</State>
      </li>
      <li>
        <Name>Neutral:</Name>
        <State>{neutral}</State>
      </li>
      <li>
        <Name>Bad:</Name>
        <State>{bad}</State>
      </li>
      <li>
        <Name>Total:</Name>
        <State>{total}</State>
      </li>
      <li>
        <Name>Positive feedback:</Name>
        <State>{positivePercentage}%</State>
      </li>
    </StatList>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
