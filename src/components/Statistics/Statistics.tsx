import { StatList, Name, State } from './Statistics.styled';
import { FC } from 'react';

type StatType = {
  good: number,
  neutral: number,
  bad: number,
  total: number,
  positivePercentage: number,
}

export const Statistics:FC<StatType> = ({ good, neutral, bad, total, positivePercentage }) => {
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
