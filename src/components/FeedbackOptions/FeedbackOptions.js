import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export function FeedbackOptions({ options, addFeedback }) {
  return (
    <div>
      {options.map(option => (
        <Button onClick={() => addFeedback(option)} key={option}>
          {option[0].toUpperCase() + option.slice(1)}
        </Button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  addFeedback: PropTypes.func,
};
