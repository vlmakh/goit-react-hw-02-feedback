import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(option => (
        <Button onClick={() => onLeaveFeedback(option)} key={option}>
          {option[0].toUpperCase() + option.slice(1)}
        </Button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
