import { Button } from './FeedbackOptions.styled';
import { FC } from 'react';

type FeedbackOptionsType = {
  options: Array<string>,
  onLeaveFeedback: any,
}

export const FeedbackOptions:FC<FeedbackOptionsType> = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <Button onClick={() => onLeaveFeedback(option)} key={option}>
          {option}
        </Button>
      ))}
    </div>
  );
}
