import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export function FeedbackOptions({ addGood, addNeutral, addBad }) {
  return (
    <div>
      <Button onClick={addGood}>Good</Button>
      <Button onClick={addNeutral}>Neutral</Button>
      <Button onClick={addBad}>Bad</Button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  addGood: PropTypes.func,
  addNeutral: PropTypes.func,
  addBad: PropTypes.func,
};
