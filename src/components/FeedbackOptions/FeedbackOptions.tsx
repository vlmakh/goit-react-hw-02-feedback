import { Button } from './FeedbackOptions.styled';
import { FC } from 'react';

type FeedbackOptionsType = {
  options: Array<string>;
  onLeaveFeedback: (x: string) => void;
};

export const FeedbackOptions: FC<FeedbackOptionsType> = ({
  options,
  onLeaveFeedback,
}) => {
  return (
    <div>
      {options.map(option => (
        <Button onClick={(): void => onLeaveFeedback(option)} key={option}>
          {option}
        </Button>
      ))}
    </div>
  );
};
